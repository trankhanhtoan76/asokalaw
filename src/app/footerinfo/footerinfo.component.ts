import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

@Component({
    selector: 'app-footerinfo',
    templateUrl: './footerinfo.component.html',
    styleUrls: ['./footerinfo.component.css']
})
export class FooterinfoComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

}
