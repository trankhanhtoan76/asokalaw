import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-plsk-contact',
    templateUrl: './plsk-contact.component.html',
    styleUrls: ['../plsk.component.css', './plsk-contact.component.css']
})
export class PlskContactComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    submit(): void {
        $('#plskform1').modal('show');
    }
}
