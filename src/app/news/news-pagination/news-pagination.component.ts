import {Component, Input, OnInit} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-news-pagination',
    templateUrl: './news-pagination.component.html',
    styleUrls: ['./news-pagination.component.css']
})
export class NewsPaginationComponent implements OnInit {
    @Input() category_slug: string;
    total: number;
    pages: number;
    current: number;
    prev: number;
    next: number;
    prevLink: Array<any>;
    nextLink: Array<any>;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;

        const url = new URL(window.location.href);
        this.current = parseInt(url.searchParams.get('p'), 10);

        if (this.current == 1) {
            this.prev = 1;
        }

        const data = new FormData();
        data.append('action', 'get_record');
        data.append('query', `
select count(p.id) as total
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
`);
        postAPI(data, function (res): void {
            self.total = res.total;
            self.pages = Math.ceil(self.total / 10);
            if (self.current == self.pages) {
                self.next = self.current;
            }

            for (let i = 1; i < self.current && i < 4; i++) {
                self.prevLink.push(i);
            }
        });
    }

}
