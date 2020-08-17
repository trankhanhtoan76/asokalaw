import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
    @Input() data: any;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

}
