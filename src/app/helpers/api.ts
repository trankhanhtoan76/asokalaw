export function callAPI(method: string, headers: {}, url: string, data: FormData, callback, callbackError?): void {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                const result = JSON.parse(xmlHttp.responseText);
                callback(result);
            } else {
                if (callbackError instanceof Function) {
                    callbackError(xmlHttp.statusText);
                }
            }
        }
    };
    xmlHttp.open(method, url);
    for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
            xmlHttp.setRequestHeader(key, headers[key]);
        }
    }
    xmlHttp.send(data);
}

export function postAPI(data: FormData, callback, callbackError?): void {
    callAPI('POST', {}, 'http://admin.asokalaw.vn/api/index.php', data, callback, callbackError);
}
