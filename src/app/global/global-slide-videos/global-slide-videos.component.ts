import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-global-slide-videos',
    templateUrl: './global-slide-videos.component.html',
    styleUrls: ['./global-slide-videos.component.css']
})
export class GlobalSlideVideosComponent implements OnInit {
    @Input() videos;
    isInstalled: boolean;

    constructor(public global: GlobalService) {
    }

    get random() {
        return Math.random() * 10000;
    }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        if (!this.isInstalled) {
            this.isInstalled = true;
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
            $('.slide-item').on('click', function () {
                $($(this).attr('data-video-id')).modal('show');
            });
        }
    }
}
