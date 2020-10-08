export function runGA(){
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    function gtag(){// @ts-ignore
        dataLayer.push(arguments);}
    // @ts-ignore
    gtag('js', new Date());

    // @ts-ignore
    gtag('config', 'UA-63365406-2');
}
