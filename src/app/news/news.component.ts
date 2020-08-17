import {Component, OnInit} from '@angular/core';
import {postAPI} from "../helpers/api";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    count: number;
    news: any;
    firstnews: any;

    constructor() {
    }

    ngOnInit(): void {
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        data.append('query', 'select p.description, p.created_at,p.views, p.modified_at, p.created_by, p.modified_by, title, en_description, en_short_description, short_description, en_title, is_publish, category_id, image, slug, c.name as category_name,c.en_name as en_category_name from post as p left join category c on p.category_id = c.id where is_publish=1 limit 10');
        postAPI(data, function (res): void {console.log(res);
            if (res.length) {
                self.firstnews = res[0]
                res.splice(0, 1);
                self.news = res;
            }
        });
    }

}
