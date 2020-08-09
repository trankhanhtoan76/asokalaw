import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

declare var $: any;

@Component({
    selector: 'app-modal-video',
    templateUrl: './modal-video.component.html',
    styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements OnInit {
    @Input() dataid;
    link;

    constructor(private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.link = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.dataid);
    }

    reloadIframe() {
        const $if = $('#' + this.dataid).find('iframe');
        $if.attr('src', $if.attr('src'));
    }
}
