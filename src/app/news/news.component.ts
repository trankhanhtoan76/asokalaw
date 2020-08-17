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
        data.append('query', 'select * from post left join category c on post.category_id = c.id limit 10');
        postAPI(data, function (res): void {console.log(res);
            if (res.length) {
                self.firstnews = res[0]
                res.splice(0, 1);
                self.news = res;
            }
        });
    }

}
