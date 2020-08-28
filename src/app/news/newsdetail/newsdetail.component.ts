import {Component, OnInit} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {ActivatedRoute} from "@angular/router";
import {GlobalService} from "../../service/global.service";
import {DomSanitizer} from "@angular/platform-browser";
import {serialize} from "../../helpers/serialize";

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
        id: undefined
    };
    category = {
        name: undefined,
        en_name: undefined,
        description: undefined,
        en_description: undefined
    };
    recent = [];
    slug: string;

    constructor(private _router: ActivatedRoute, public global: GlobalService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        const self = this;
        this._router.paramMap.subscribe(paramMap => {
            this.slug = paramMap.get('post');

            const param = new FormData();
            param.append('action', 'get_record');
            param.append('query', `
                select *
                from post
                where slug = '${this.slug}' or slug = '${this.slug}'
            `);
            postAPI(param, function (res): void {
                self.data = res;
                console.log(res);
                self.data.description = self._sanitizer.bypassSecurityTrustHtml(self.data.description);
                self.data.en_description = self._sanitizer.bypassSecurityTrustHtml(self.data.en_description);

                self.global.seo_title.next(res.seo_title);
                self.global.seo_keywords.next(res.seo_keywords);
                self.global.seo_description.next(res.seo_description);

                let categorysRelated = serialize.parse(res.category_id);
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

                    /**
                     * get recent
                     */
                    for (const categoryId of categorysRelated) {
                        const param = new FormData();
                        param.append('action', 'get_records');
                        param.append('query', `
                            select *
                            from post
                            where category_id like '${categoryId}' and id<>'${self.data.id}'
                            order by created_at desc
                            limit 5
                        `);
                        postAPI(param, function (res): void {
                            self.recent = self.recent.concat(res);
                        });
                    }
                }
            });
        });
    }

}
