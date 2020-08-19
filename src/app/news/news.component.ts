import {Component, OnInit} from '@angular/core';
import {postAPI} from "../helpers/api";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../service/global.service";
import {of} from "rxjs";

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
    offset = 0;
    isHasMore = true;
    showBtnGetMore = true;

    constructor(private router: ActivatedRoute, public _global: GlobalService, private _router: Router) {
    }

    ngOnInit(): void {
        if (this._router.url == '/tin-tuc') {
            this.category_slug = this._router.url.slice(1);
            this.initCategoryInfo();
            this.getPosts(10, 0, true);
        } else {
            this.router.paramMap.subscribe(paramMap => {
                this.category_slug = paramMap.get('category');
                this.initCategoryInfo();
                this.getPosts(10, 0, true, this.category_slug);
            });
        }
    }

    initCategoryInfo(): void {
        const self = this;
        const param = new FormData();
        param.append('action', 'get_record');
        param.append('query', `select * from category where slug='${this.category_slug}'`);
        postAPI(param, function (res): void {
            self.category = res;
            self._global.seo_title.next(res.seo_title);
            self._global.seo_keywords.next(res.seo_keywords);
            self._global.seo_description.next(res.seo_description);
        });
    }

    getPosts(limit: number, offset: number, firstLoad: boolean, categorySlug?: string) {
        this.offset = this.offset + limit;

        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        if (categorySlug) {
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
                       p.en_tags,
                       p.views,
                       c3.name as category_name,
                       c3.en_name as en_category_name,
                       c3.slug as category_slug
                from post as p
                         inner join category c3 on p.category_id = c3.id
                where (p.category_id in(select c.id from category as c where c.slug = '${categorySlug}') 
                           or p.category_id in(select c2.id from category as c2  where c2.parent_id in (select c4.id from category as c4 where c4.slug = '${categorySlug}')))
                        and p.is_publish = 1
                order by p.created_at desc
                limit ${limit} offset ${offset}
                `);
        } else {
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
                       p.en_tags,
                       p.views,
                       c3.name    as category_name,
                       c3.en_name as en_category_name,
                       c3.slug    as category_slug
                from post as p
                         inner join category c3 on p.category_id = c3.id
                where p.is_publish = 1
                order by p.created_at desc
                limit ${limit} offset ${offset}
            `);
        }

        postAPI(data, function (res): void {
            if (firstLoad) {
                if (res.length) {
                    self.firstnews = res[0]
                    res.splice(0, 1);
                    self.news = res;
                } else {
                    self.firstnews = null;
                    self.news = [];
                }
            } else {
                if (res.length < 9) self.showBtnGetMore = false;
                self.news = self.news.concat(res);
            }
        });
    }

    getMore(): void {
        if (this.category_slug == 'tin-tuc') {
            this.getPosts(9, this.offset, false);
        } else
            this.getPosts(9, this.offset, false, this.category_slug);
    }

}
