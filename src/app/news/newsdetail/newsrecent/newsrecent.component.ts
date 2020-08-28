import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../../service/global.service";

@Component({
    selector: 'app-newsrecent',
    templateUrl: './newsrecent.component.html',
    styleUrls: ['./newsrecent.component.css']
})
export class NewsrecentComponent implements OnInit {
    @Input('data') posts;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

}
