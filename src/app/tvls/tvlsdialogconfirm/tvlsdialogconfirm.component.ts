import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-tvlsdialogconfirm',
    templateUrl: './tvlsdialogconfirm.component.html',
    styleUrls: ['./tvlsdialogconfirm.component.css']
})
export class TvlsdialogconfirmComponent implements OnInit {

    constructor(public global: GlobalService) {
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
