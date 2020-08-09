import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-homevideos',
    templateUrl: './homevideos.component.html',
    styleUrls: ['./homevideos.component.css']
})
export class HomevideosComponent implements OnInit {
    videos;

    constructor() {
        this.videos = [
            {img: "/assets/media/vid1.png", id: 'bb42zrvKOWQ'},
            {img: "/assets/media/vid2.png", id: '6RplDXDwPG8'},
            {img: "/assets/media/vid3.png", id: 'A1epghSWS-k'},
            {img: "/assets/media/vid4.png", id: 'ege5lEtvPWA'}
        ];
    }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        $('.list-slide-video').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnVideo" style="width: 25px">',
            prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnVideo" style="width: 25px">',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.list-slide-video iframe').each(function () {
            const w = $(this).width();
            $(this).attr('height', parseInt(String(parseFloat(w) / 1.77), 10));
        });
    }
}
