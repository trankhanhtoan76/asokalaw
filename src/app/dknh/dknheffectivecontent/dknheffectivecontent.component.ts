import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dknheffectivecontent',
    templateUrl: './dknheffectivecontent.component.html',
    styleUrls: ['./dknheffectivecontent.component.css']
})
export class DknheffectivecontentComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        $('#dknh-cv01,#dknh-cv02,#dknh-cv03,#dknh-cv04,#dknh-cv05,#dknh-cv06,#dknh-cv07,#dknh-cv011,#dknh-cv021,#dknh-cv031,#dknh-cv041,#dknh-cv051,#dknh-cv061,#dknh-cv071').magnificPopup({type: 'image'});
    }

}
