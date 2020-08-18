import {Component, OnInit} from '@angular/core';
import {postAPI} from "../../../helpers/api";
import {GlobalService} from "../../../service/global.service";

@Component({
    selector: 'app-newsmostviews',
    templateUrl: './newsmostviews.component.html',
    styleUrls: ['./newsmostviews.component.css']
})
export class NewsmostviewsComponent implements OnInit {
    data;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;
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
                   c.name    as category_name,
                   c.en_name as en_category_name,
                   c.slug    as category_slug
            from post as p
                     inner join category c on p.category_id = c.id
            order by p.views desc
            limit 5
        `);

        postAPI(data, function (res): void {
            if (res.length) {
                self.data = res;
            } else {
                self.data = [];
            }
        });
    }

}
