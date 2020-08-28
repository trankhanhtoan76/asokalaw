import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

@Component({
    selector: 'app-homevideos',
    templateUrl: './homevideos.component.html',
    styleUrls: ['./homevideos.component.css']
})
export class HomevideosComponent implements OnInit {
    videos = [
        {img: "/assets/media/vid1.png", id: 'bb42zrvKOWQ'},
        {img: "/assets/media/vid2.png", id: '6RplDXDwPG8'},
        {img: "/assets/media/vid3.png", id: 'A1epghSWS-k'},
        {img: "/assets/media/vid4.png", id: 'ege5lEtvPWA'}
    ];

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }
}
