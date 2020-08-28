import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-tvlsconsult',
    templateUrl: './tvlsconsult.component.html',
    styleUrls: ['./tvlsconsult.component.css']
})
export class TvlsconsultComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    click(val) {
        $('select[name="type"]').val(val);
        $('#form1').modal('show');
    }

}
