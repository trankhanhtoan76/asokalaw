import {Component, OnInit, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dkdtbusiness',
    templateUrl: './dkdtbusiness.component.html',
    styleUrls: ['./dkdtbusiness.component.css']
})
export class DkdtbusinessComponent implements OnInit {
    @Output() showregistrationform = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    submit(e): void {
        this.showregistrationform.emit(e);
    }

    ngAfterContentInit(): void {
        $('.controller-tabs-popular').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnNews news" style="width:25px;position: absolute;z-index: 1000;top: 80px;right: 0;color: #BFAFB2;">',
            prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnNews news" style="width:25px;position: absolute;z-index: 1000;top: 80px;left: 0;color: #BFAFB2;">',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.controller-tabs-popular').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let activeEle;
            let dataTarget;
            if (currentSlide === 7 && nextSlide === 0) {
                activeEle = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]');
                dataTarget = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]').data('target');
            } else {
                if (currentSlide < nextSlide) {
                    activeEle = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]');
                    dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]').data('target');
                } else {
                    activeEle = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]');
                    dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]').data('target');
                }
            }
            $('.controller-tabs-popular div').removeClass('active');
            activeEle.addClass('active');

            $('div.tab-pane-business').css('display', 'none');
            $(dataTarget + '.tab-pane-business').css('display', 'flex');
        });
    }
}
