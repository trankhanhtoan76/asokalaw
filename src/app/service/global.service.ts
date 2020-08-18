import {Injectable} from '@angular/core';
import {postAPI} from "../helpers/api";
import {getCookie, setCookie} from "../helpers/cookie";
import {langDefined} from "../../lang";
import {BehaviorSubject} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    seo_title = new BehaviorSubject(null);
    seo_keywords = new BehaviorSubject(null);
    seo_description = new BehaviorSubject(null);
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
        facebook: '',
        seo_title:'',
        seo_keywords:'',
        seo_description:''
    };
    locale: string;
    langDefined: any;

    constructor(private _title: Title, private _meta: Meta) {
        var self = this;
        const params = new FormData();
        params.append('action', 'get_record');
        params.append('query', 'select * from settings');
        postAPI(params, function (res): void {
            self.settings = res;
            self.seo_title.next(self.settings.seo_title);
            self.seo_keywords.next(self.settings.seo_keywords);
            self.seo_description.next(self.settings.seo_description);
        });
        this.initLocale();
        this.langDefined = langDefined;

        //set title and meta of page
        this.seo_title.subscribe(value => {
            this._title.setTitle(value);
        });
        this.seo_keywords.subscribe(value => {
            this._meta.removeTag('name="keywords"');
            this._meta.addTag({name: 'keywords', content: value});
        });
        this.seo_description.subscribe(value => {
            this._meta.removeTag('name="description"');
            this._meta.addTag({name: 'description', content: value});
        });
        this._meta.addTag({name: 'author', content: 'AsokaLaw'});
    }

    initLocale() {
        const url = new URL(window.location.href);
        const lang = url.searchParams.get('lang');
        if (lang) {
            this.locale = lang;
            setCookie('asokalawlang', lang);
        } else {
            this.locale = getCookie('asokalawlang');
            if (!this.locale) {
                this.locale = 'vi';
            }
        }
    }
}
