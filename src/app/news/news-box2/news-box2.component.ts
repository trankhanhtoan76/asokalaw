import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-news-box2',
    templateUrl: './news-box2.component.html',
    styleUrls: ['./news-box2.component.css']
})
export class NewsBox2Component implements OnInit {
    @Input() data;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

}
