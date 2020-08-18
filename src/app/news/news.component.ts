import {Component, OnInit} from '@angular/core';
import {postAPI} from "../helpers/api";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    count: number;
    news: any;
    firstnews: any;
    category_slug: string;
    category = {
        tags: ''
    };

    constructor(private router: ActivatedRoute) {

    }

    ngOnInit(): void {
        const self = this;
        this.router.paramMap.subscribe(paramMap => {
            this.category_slug = paramMap.get('category');

            //get category info
            const param = new FormData();
            param.append('action', 'get_record');
            param.append('query', `select * from category where slug='${this.category_slug}'`);
            postAPI(param, function (res): void {
                self.category = res;
            });

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
            p.category_id in
            (
                select c.id
                from category as c
                where c.slug = '${this.category_slug}'
            )
        or p.category_id in
           (
               select c2.id
               from category as c2
               where c2.parent_id in (select c4.id from category as c4 where c4.slug = '${this.category_slug}')
           )
    )
  and p.is_publish = 1
order by p.created_at desc
limit 10
`);

            postAPI(data, function (res): void {
                console.log(res);
                if (res.length) {
                    self.firstnews = res[0]
                    res.splice(0, 1);
                    self.news = res;
                } else {
                    self.firstnews = null;
                    self.news = [];
                }
            });
        });
    }

}
