import {Component, OnInit} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {ActivatedRoute} from "@angular/router";
import {GlobalService} from "../../service/global.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-newsdetail',
    templateUrl: './newsdetail.component.html',
    styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
    data;
    recent;
    slug;

    constructor(private _router: ActivatedRoute, public global: GlobalService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        const self = this;
        this._router.paramMap.subscribe(paramMap => {
            this.slug = paramMap.get('post');

            //get category info
            const param = new FormData();
            param.append('action', 'get_record');
            param.append('query', `
select p.id,
       p.description,
       p.created_at,
       p.modified_at,
       p.created_by,
       p.modified_by,
       p.title,
       p.en_description,
       p.en_short_description,
       p.short_description,
       p.en_title,
       p.is_publish,
       p.category_id,
       p.image,
       p.slug,
       p.tags,
       p.views,
       p.seo_title,
       p.seo_keywords,
       p.seo_description,
       c.name as category_name,
       c.en_name as en_category_name,
       c.description as category_description,
       c.en_description as en_category_description,
       c.slug as category_slug
from post as p 
inner join category c on p.category_id = c.id
where p.slug='${this.slug}'
`);
            postAPI(param, function (res): void {
                self.data = res;console.log(res);
                self.data.description = self._sanitizer.bypassSecurityTrustHtml(self.data.description);
                self.data.en_description = self._sanitizer.bypassSecurityTrustHtml(self.data.en_description);

                self.global.seo_title.next(res.seo_title);
                self.global.seo_keywords.next(res.seo_keywords);
                self.global.seo_description.next(res.seo_description);

                //get list post of category
                const data = new FormData();
                data.append('action', 'get_records');
                data.append('query', `
select p.id,
       p.description,
       p.created_at,
       p.modified_at,
       p.created_by,
       p.modified_by,
       p.title,
       p.en_description,
       p.en_short_description,
       p.short_description,
       p.en_title,
       p.is_publish,
       p.category_id,
       p.image,
       p.slug,
       p.tags,
       p.views,
       c3.name as category_name,
       c3.en_name as en_category_name,
       c3.slug as category_slug
from post as p
         inner join category c3 on p.category_id = c3.id
where (
            p.category_id = '${self.data.category_id}'
        or p.category_id in
           (
               select c2.id
               from category as c2
               where c2.parent_id = '${self.data.category_id}'
           )
    )
  and p.is_publish = 1 and p.id<>'${self.data.id}'
order by p.created_at desc
limit 5
`);

                postAPI(data, function (res): void {
                    if (res.length) {
                        self.recent = res;
                    } else {
                        self.recent = [];
                    }
                });
            });
        });
    }

}
