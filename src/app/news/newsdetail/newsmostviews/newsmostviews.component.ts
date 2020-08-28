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
            select *
            from post
            order by views desc
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
