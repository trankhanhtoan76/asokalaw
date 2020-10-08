import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SpinnerService} from "./service/spinner.service";
import {Meta, Title} from "@angular/platform-browser";
import {GlobalService} from "./service/global.service";
import {runGA} from "./helpers/ga";
import {postAPI} from "./helpers/api";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    pages: [];
    pmap = {
        '/': '6b1c357b3eaba93eda8d551ca9d73d55Mvqd',
        '/tam-nhin-su-menh': '3700c3e42a3aabedf9cb47b87e3b0fc31ckz',
        '/vision-mission': '3700c3e42a3aabedf9cb47b87e3b0fc31ckz',
        '/co-hoi-nghe-nghiep': '5006b7bf1d2dbdb12307223ea1d94b203zCB',
        '/careers': '5006b7bf1d2dbdb12307223ea1d94b203zCB',

        '/business-establishment': 'bdfa1324b1faf13e460e747ca6efa741YKZf',
        '/khoi-tao-doanh-nghiep': 'bdfa1324b1faf13e460e747ca6efa741YKZf',

        '/business-under-3-years': 'e936e5f5ae81193aad1a1d3056031a74UvLv',
        '/doanh-nghiep-duoi-3-nam': 'e936e5f5ae81193aad1a1d3056031a74UvLv',

        '/business-over-3-years': '4be7317756b99bbf021d66232ba3422fY8ti',
        '/doanh-nghiep-tren-3-nam': '4be7317756b99bbf021d66232ba3422fY8ti',

        '/trademark-registration': '827e777caf6bf7e2697977c605711d76rXpy',
        '/dang-ky-nhan-hieu': '827e777caf6bf7e2697977c605711d76rXpy',

        '/business-registration': '28ec135dd405718539998aa6e310601fsuJS',
        '/dang-ky-kinh-doanh': '28ec135dd405718539998aa6e310601fsuJS',

        '/investment-registration': '2613e91835f3b3a0d6cafafcc427eccb27bV',
        '/dang-ky-dau-tu': '2613e91835f3b3a0d6cafafcc427eccb27bV',

        '/regular-legal-service': '30527559bc0974a214e5e2eb3208d106wPLl',
        '/phap-ly-thuong-xuyen': '30527559bc0974a214e5e2eb3208d106wPLl',

        '/lawyer-consultation': '7c75bbc9d6d27f17a8317883cbb28415iG6b',
        '/tu-van-luat-su': '7c75bbc9d6d27f17a8317883cbb28415iG6b',

        '/event-related-legal-service': 'e6e5d70fb11e1fa747df430170211e59zpDk',
        '/phap-ly-su-kien': 'e6e5d70fb11e1fa747df430170211e59zpDk',

        '/dispute-resolution': '4dbf43c5edac06f58bf06c96a89ba973SAMF',
        '/giai-quyet-tranh-chap': '4dbf43c5edac06f58bf06c96a89ba973SAMF',

        '/faq': '3613a212cdd696dba69943fe9c3e4f92C6yg',
        '/cau-hoi-thuong-gap': '3613a212cdd696dba69943fe9c3e4f92C6yg',

        '/terms-of-use': 'f0914cfd03c8018ca07c2b96472144fdP51Y',
        '/chinh-sach-khach-hang': 'f0914cfd03c8018ca07c2b96472144fdP51Y',

        '/working-process': 'f9abfcf66ec7f15cb7e038feb8c3817ffyuQ',
        '/quy-trinh-lam-viec': 'f9abfcf66ec7f15cb7e038feb8c3817ffyuQ',

        '/payment-terms': 'a2f8de28eefc49a3de57232895548aa0pTgt',
        '/huong-dan-thanh-toan': 'a2f8de28eefc49a3de57232895548aa0pTgt',

        '/contact-us': '98042058c6af342d0360130a0f14613cWFqm',
        '/lien-he': '98042058c6af342d0360130a0f14613cWFqm'
    };

    constructor(private router: Router, private spinner: SpinnerService, private _title: Title, private _meta: Meta, public global: GlobalService) {
        this.spinner.hide();
    }

    ngOnInit(): void {
        this._meta.addTag({name: 'author', content: 'AsokaLaw'});

        var self = this;
        const params = new FormData();
        params.append('action', 'get_records');
        params.append('query', 'select * from pservice');
        postAPI(params, function (res): void {
            console.log(res);
            self.pages = res;
            self.setMeta();
        });

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
            runGA();
            this.setMeta();
        });
    }

    setMeta(): void {
        var self = this;
        if (this.pmap.hasOwnProperty(window.location.pathname)) {
            for (const page of this.pages) {
                // @ts-ignore
                if (page.id == this.pmap[window.location.pathname]) {
                    if (this.global.locale == 'vi') {
                        // @ts-ignore
                        this._title.setTitle(page.seo_title);
                        this._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        this._meta.addTag({name: 'keywords', content: page.seo_keywords});
                        this._meta.removeTag('name="description"');
                        // @ts-ignore
                        this._meta.addTag({name: 'description', content: page.seo_description});
                    } else {
                        // @ts-ignore
                        this._title.setTitle(page.en_seo_title);
                        this._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        this._meta.addTag({name: 'keywords', content: page.en_seo_keywords});
                        this._meta.removeTag('name="description"');
                        // @ts-ignore
                        this._meta.addTag({name: 'description', content: page.en_seo_description});
                    }
                }
            }
        } else if (/^\/danh-muc/.test(window.location.pathname) || /^\/category/.test(window.location.pathname)) {
            const params = new FormData();
            params.append('action', 'get_record');
            params.append('query', `select * from category where slug='${window.location.pathname.split('/')[2]}' or en_slug='${window.location.pathname.split('/')[2]}'`);
            postAPI(params, function (res): void {
                if (res.id != undefined) {
                    if (self.global.locale == 'vi') {
                        // @ts-ignore
                        self._title.setTitle(res.seo_title);
                        self._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        self._meta.addTag({name: 'keywords', content: res.seo_keywords});
                        self._meta.removeTag('name="description"');
                        // @ts-ignore
                        self._meta.addTag({name: 'description', content: res.seo_description});
                    } else {
                        // @ts-ignore
                        self._title.setTitle(res.en_seo_title);
                        self._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        self._meta.addTag({name: 'keywords', content: res.en_seo_keywords});
                        self._meta.removeTag('name="description"');
                        // @ts-ignore
                        self._meta.addTag({name: 'description', content: res.en_seo_description});
                    }
                }
            });
        } else {
            const params = new FormData();
            params.append('action', 'get_record');
            params.append('query', `select * from post where slug='${window.location.pathname.slice(1)}' or en_slug='${window.location.pathname.slice(1)}'`);
            postAPI(params, function (res): void {
                if (res.id != undefined) {
                    if (self.global.locale == 'vi') {
                        // @ts-ignore
                        self._title.setTitle(res.seo_title);
                        self._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        self._meta.addTag({name: 'keywords', content: res.seo_keywords});
                        self._meta.removeTag('name="description"');
                        // @ts-ignore
                        self._meta.addTag({name: 'description', content: res.seo_description});
                    } else {
                        // @ts-ignore
                        self._title.setTitle(res.en_seo_title);
                        self._meta.removeTag('name="keywords"');
                        // @ts-ignore
                        self._meta.addTag({name: 'keywords', content: res.en_seo_keywords});
                        self._meta.removeTag('name="description"');
                        // @ts-ignore
                        self._meta.addTag({name: 'description', content: res.en_seo_description});
                    }
                }
            });
        }
    }
}
