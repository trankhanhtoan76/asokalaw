import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-view-video-modal',
    templateUrl: './view-video-modal.component.html',
    styleUrls: ['./view-video-modal.component.css']
})
export class ViewVideoModalComponent implements OnInit {
    @Input() link;
    @Input() dataid;

    constructor() {
    }

    ngOnInit(): void {
    }

}
