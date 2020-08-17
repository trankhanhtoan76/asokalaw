import {Injectable} from '@angular/core';
import {postAPI} from "../helpers/api";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    settings = {
        favicon: '',
        logo: '',
        mailer_host: '',
        mailer_user: '',
        mailer_port: '',
        mailer_secure: '',
        mailer_replyto: '',
        mailer_from: '',
        mailer_fromname: '',
        mailer_replytoname: '',
        name: '',
        email: '',
        head_office: '',
        branch_office: '',
        mailer_pass: '',
        phone: '',
        record_per_page: '',
        hot_line: '',
        youtube: '',
        linkin: '',
        facebook: ''
    };

    constructor() {
        var self = this;
        const params = new FormData();
        params.append('action', 'get_record');
        params.append('query', 'select * from settings');
        postAPI(params, function (res): void {
            self.settings = res;
        });
    }
}
