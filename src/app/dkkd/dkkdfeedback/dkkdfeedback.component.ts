import {Component, OnInit} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-dkkdfeedback',
    templateUrl: './dkkdfeedback.component.html',
    styleUrls: ['./dkkdfeedback.component.css']
})
export class DkkdfeedbackComponent implements OnInit {
    data = [];

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        data.append('query', `
            select *
            from feedbackhome
            where page = 's4'
            order by created_at
        `);
        postAPI(data, function (res): void {
            for (const item of res) {
                self.data.push({
                    name: item.name,
                    img: item.image,
                    title: self.global.locale == 'vi' ? item.title : item.en_title,
                    content: self.global.locale == 'vi' ? item.description : item.en_description
                });
            }
        });
    }
}
