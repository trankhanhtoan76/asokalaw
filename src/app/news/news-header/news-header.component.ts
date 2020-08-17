import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-news-header',
    templateUrl: './news-header.component.html',
    styleUrls: [ '../news.component.css','./news-header.component.css']
})
export class NewsHeaderComponent implements OnInit {
    @Input() data = {
        name: '',
        en_name: '',
        description: '',
        en_description: ''
    };

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

}
