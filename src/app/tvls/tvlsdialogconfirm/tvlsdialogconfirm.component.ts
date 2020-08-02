import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-tvlsdialogconfirm',
    templateUrl: './tvlsdialogconfirm.component.html',
    styleUrls: ['./tvlsdialogconfirm.component.css']
})
export class TvlsdialogconfirmComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    noClick() {
        $('#tvlsdialogconfirm').modal('hide');
        // @ts-ignore
        $(window.lastModal).modal('show');
    }

    yesClick() {
        $('#tvlsdialogconfirm').modal('hide');
        $('#prevformclose').modal('show');
    }
}
