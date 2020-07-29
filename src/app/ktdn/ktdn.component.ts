import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-ktdn',
    templateUrl: './ktdn.component.html',
    styleUrls: ['./ktdn.component.css']
})
export class KtdnComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        $('.create-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: false,
            prevArrow: false,
            customPaging: function (slider, i) {
                return '<style>.create-slider-dots {display: inline-block;width: 20px;height: 20px;border-radius: 50%;position: relative;z-index: 1;cursor: pointer;transition: all 0.2s ease;}  .create-slider-dots::before, .create-slider-dots::after {position: absolute;content: \'\';border-radius: 50%;transition: all 0.2s ease;}  .create-slider-dots::after {top: calc(50% - 10px);left: calc(50% - 10px);background: transparent;border: 1px solid #7EC2E3;width: 100%;height: 100%;transform: scale(0);}  .create-slider-dots::before {top: 50%;left: 50%;transform: translate(-50%, -50%);background: #3F3F3F;width: 40%;height: 40%;}  .create-lawyer-slider .slick-active .create-slider-dots::before, .create-slider .slick-active .create-slider-dots::before, .create-slider-dots:hover::before {background: #7EC2E3;}  .create-lawyer-slider .slick-active .create-slider-dots::after, .create-slider .slick-active .create-slider-dots::after, .create-slider-dots:hover::after {transform: scale(1);}</style><span class="create-slider-dots"></span>';
            },
            focusOnSelect: true
        });
        $('.create-list-news-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: '<img src="/assets/site/images/create_icon_right.svg" class="nextArrowBtnCreate" style="position: absolute;z-index: 1000;top: 110px;right: 0;max-width: 50px;">',
            prevArrow: '<img src="/assets/site/images/create_icon_left.svg" class="prevArrowBtnCreate" style="position: absolute;z-index: 1000;top: 110px;left: 0;max-width: 50px;">',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.create-lawyer-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: '<img src="/assets/site/images/create_arrow_right.svg" class="nextArrowRightLawyers" style="max-width: 20px;position: absolute;bottom: 8px;left: 3rem;">',
            prevArrow: '<img src="/assets/site/images/create_arrow_left.svg" class="prevArrowLeftLawyers" style="max-width: 20px;position: absolute;bottom: 8px;left: 1rem;">',
            customPaging: function (slider, i) {
                return '<style>.create-slider-dots {display: inline-block;width: 20px;height: 20px;border-radius: 50%;position: relative;z-index: 1;cursor: pointer;transition: all 0.2s ease;}  .create-slider-dots::before, .create-slider-dots::after {position: absolute;content: \'\';border-radius: 50%;transition: all 0.2s ease;}  .create-slider-dots::after {top: calc(50% - 10px);left: calc(50% - 10px);background: transparent;border: 1px solid #7EC2E3;width: 100%;height: 100%;transform: scale(0);}  .create-slider-dots::before {top: 50%;left: 50%;transform: translate(-50%, -50%);background: #3F3F3F;width: 40%;height: 40%;}  .create-lawyer-slider .slick-active .create-slider-dots::before, .create-slider .slick-active .create-slider-dots::before, .create-slider-dots:hover::before {background: #7EC2E3;}  .create-lawyer-slider .slick-active .create-slider-dots::after, .create-slider .slick-active .create-slider-dots::after, .create-slider-dots:hover::after {transform: scale(1);}</style><span class="create-slider-dots"></span>';
            },
        });
    }
}
