import {Component, OnInit} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../../service/global.service";
import {DomSanitizer} from "@angular/platform-browser";
import {serialize} from "../../helpers/serialize";
import {Location} from '@angular/common'

@Component({
    selector: 'app-newsdetail',
    templateUrl: './newsdetail.component.html',
    styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
    data = {
        description: undefined,
        en_description: undefined,
        title: undefined,
        en_title: undefined,
        modified_at: undefined,
        tags: undefined,
        en_tags: undefined,
        id: undefined,
        slug: "",
        en_slug: ""
    };
    category = {
        name: undefined,
        en_name: undefined,
        description: undefined,
        en_description: undefined
    };
    recent = [];
    slug: string;

    constructor(private _router: ActivatedRoute, public global: GlobalService, private _sanitizer: DomSanitizer, private router: Router, private location: Location) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((evt) => {
            // @ts-ignore
            if (/^\/!(danh-muc|category)\//.test(evt.url)) {
                if (/^\/[^\/]+$/.test(this.router.url)) {
                    this.slug = this.router.url.slice(1);
                    this.data = {
                        description: undefined,
                        en_description: undefined,
                        title: undefined,
                        en_title: undefined,
                        modified_at: undefined,
                        tags: undefined,
                        en_tags: undefined,
                        id: undefined,
                        slug: "",
                        en_slug: ""
                    };
                    this.detail();
                }
            }
        });
        if (/^\/[^\/]+$/.test(this.router.url)) {
            this.slug = this.router.url.slice(1);
            this.detail();
        }
    }

    detail(): void {
        const self = this;
        const param = new FormData();
        param.append('action', 'get_record');
        param.append('query', `
                select *
                from post
                where slug = '${this.slug}' or en_slug = '${this.slug}'
            `);
        postAPI(param, function (res): void {
            self.data = res;
            console.log(res);
            self.data.description = self._sanitizer.bypassSecurityTrustHtml(self.data.description);
            self.data.en_description = self._sanitizer.bypassSecurityTrustHtml(self.data.en_description);

            if(self.global.locale=='vi'){
                self.location.replaceState(self.data.slug);
            }else{
                self.location.replaceState(self.data.en_slug);
            }

            self.global.seo_title.next(res.seo_title);
            self.global.seo_keywords.next(res.seo_keywords);
            self.global.seo_description.next(res.seo_description);

            let categorysRelated = [];
            if (/\{/.test(res.category_id)) {
                categorysRelated = serialize.parse(res.category_id);
            }
            if (categorysRelated.length > 0) {
                /**
                 * use first category for display
                 */
                const param = new FormData();
                param.append('action', 'get_record');
                param.append('query', `
                        select *
                        from category
                        where id = '${categorysRelated[0]}'
                    `);
                postAPI(param, function (res): void {
                    self.category = res;
                });
            } else {
                const param = new FormData();
                param.append('action', 'get_record');
                param.append('query', `
                    select *
                    from category
                    where slug = 'tin-tuc'
                `);
                postAPI(param, function (res): void {
                    self.category = res;
                });
            }

            /**
             * get recent
             */
            let wlocale;
            if (self.global.locale == 'vi') wlocale = 'is_english_only<>1';
            else wlocale = 'is_vi_only<>1';
            const param2 = new FormData();
            param2.append('action', 'get_records');
            param2.append('query', `
                    select *
                    from post
                    where id<>'${self.data.id}' and ${wlocale} and is_publish=1
                    order by created_at desc
                    limit 5
                `);
            postAPI(param2, function (res): void {
                self.recent = res;
            });
        });
    }
}
