import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-plsk-contact',
    templateUrl: './plsk-contact.component.html',
    styleUrls: ['../plsk.component.css', './plsk-contact.component.css']
})
export class PlskContactComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    submit(): void {
        $('#plskform1').modal('show');
    }
}
