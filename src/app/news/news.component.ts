import {Component, OnInit} from '@angular/core';
import {postAPI} from "../helpers/api";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../service/global.service";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    posts = [];
    category_slug: string;
    category = {
        id: '',
        tags: '',
        en_tags: "",
        level: 1
    };
    offset = 0;
    showBtnGetMore = true;
    allCategorys = [];

    constructor(private router: ActivatedRoute, public _global: GlobalService, private _router: Router, public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;
        if (this._router.url == '/tin-tuc' || this._router.url == '/news') {
            this.category_slug = 'tin-tuc';
            const param = new FormData();
            param.append('action', 'get_record');
            param.append('query', `select * from category where slug='${this.category_slug}' or en_slug='${this.category_slug}'`);
            postAPI(param, function (res): void {
                self.category = res;
                self.getPosts(10);
            });
        } else {
            this.router.paramMap.subscribe(paramMap => {
                this.category_slug = paramMap.get('category');
                if(this.category_slug) {
                    const param = new FormData();
                    param.append('action', 'get_record');
                    param.append('query', `select * from category where slug='${this.category_slug}' or en_slug='${this.category_slug}'`);
                    postAPI(param, function (res): void {
                        self.posts = [];
                        self.offset = 0;
                        self.category = res;
                        self.getPosts(10);
                    });
                }
            });
        }

        /**
         * get all category
         */
        const param = new FormData();
        param.append('action', 'get_records');
        param.append('query', `select *
                               from category`);
        postAPI(param, function (res): void {
            self.allCategorys = res;
            self.allCategorys = self.convertToKey(self.allCategorys, 'id');
        });
    }

    convertToKey(arr: any, arrkey: string): any {
        let result = {};
        for (const key in arr) {
            result[arr[key][arrkey]] = arr[key];
        }
        return result;
    }

    getPosts(limit: number) {
        let wlocale;
        if (this._global.locale == 'vi') wlocale = 'is_english_only<>1';
        else wlocale = 'is_vi_only<>1';
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        if (this.category_slug == 'tin-tuc') {
            data.append('query', `
                select *
                from post
                where is_publish = 1 and ${wlocale}
                order by created_at desc
                limit ${limit} offset ${this.offset}
                `);
        } else {
            data.append('query', `
                select *
                from post
                where category_id like '%${this.category.id}%' and is_publish = 1 and ${wlocale}
                order by created_at desc
                limit ${limit} offset ${this.offset}
                `);
        }

        postAPI(data, function (res): void {
            if (res.length < limit) self.showBtnGetMore = false;
            self.posts = self.posts.concat(res);
            self.offset += limit;
        });
    }

    getMore(): void {
        this.getPosts(9);
    }

}
