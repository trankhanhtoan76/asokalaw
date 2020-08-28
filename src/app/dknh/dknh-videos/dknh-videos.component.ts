import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dknh-videos',
    templateUrl: './dknh-videos.component.html',
    styleUrls: ['./dknh-videos.component.css']
})
export class DknhVideosComponent implements OnInit {
    videos;
    hadInit: boolean;

    constructor(public global: GlobalService) {
        this.videos = [
            {img: "/assets/media/DKNH/video01.jpg", id: 'EKf1NEDWnQA'},
            {img: "/assets/media/DKNH/video02.jpg", id: 'bb42zrvKOWQ'},
            {img: "/assets/media/DKNH/video03.jpg", id: 'D_KLK2mAyrA'},
        ];
    }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        if (!this.hadInit) {
            this.hadInit = true;
            $('.list-slide-video').slick({
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
}
