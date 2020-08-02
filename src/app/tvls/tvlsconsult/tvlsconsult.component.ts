import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-tvlsconsult',
    templateUrl: './tvlsconsult.component.html',
    styleUrls: ['./tvlsconsult.component.css']
})
export class TvlsconsultComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    click(val) {
        $('select[name="type"]').val(val);
        $('#form1').modal('show');
    }

}
