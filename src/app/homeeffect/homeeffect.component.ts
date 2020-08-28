import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
    selector: 'app-homeeffect',
    templateUrl: './homeeffect.component.html',
    styleUrls: ['./homeeffect.component.css']
})
export class HomeeffectComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    reloadIframe(e) {
        const $if = $(e).find('iframe');
        $if.attr('src', $if.attr('src'));
    }
}
