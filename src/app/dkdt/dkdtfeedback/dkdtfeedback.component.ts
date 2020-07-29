import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dkdtfeedback',
    templateUrl: './dkdtfeedback.component.html',
    styleUrls: ['./dkdtfeedback.component.css']
})
export class DkdtfeedbackComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        $('.feedback-slide-pltx').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: false,
            prevArrow: false,
            customPaging: function (slider, i) {
                return '<style>.feedback-slide-pltx .slick-dots{justify-content: end;margin-top:-100px}.create-slider-dots {display: inline-block;width: 20px;height: 20px;border-radius: 50%;position: relative;z-index: 1;cursor: pointer;transition: all 0.2s ease;}  .create-slider-dots::before, .create-slider-dots::after {position: absolute;content: \'\';border-radius: 50%;transition: all 0.2s ease;}  .create-slider-dots::after {top: calc(50% - 10px);left: calc(50% - 10px);background: transparent;border: 1px solid #7EC2E3;width: 100%;height: 100%;transform: scale(0);}  .create-slider-dots::before {top: 50%;left: 50%;transform: translate(-50%, -50%);background: #3F3F3F;width: 40%;height: 40%;}  .feedback-slide-pltx .slick-active .create-slider-dots::before, .create-slider .slick-active .create-slider-dots::before, .create-slider-dots:hover::before {background: #7EC2E3;}  .feedback-slide-pltx .slick-active .create-slider-dots::after, .create-slider .slick-active .create-slider-dots::after, .create-slider-dots:hover::after {transform: scale(1);}</style><i class="create-slider-dots"></i>';
            },
            focusOnSelect: true
        });
        $('.feedback-slide-pltx-mobile').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: false,
            prevArrow: false,
            customPaging: function (slider, i) {
                return '<style>.create-slider-dots {display: inline-block;width: 20px;height: 20px;border-radius: 50%;position: relative;z-index: 1;cursor: pointer;transition: all 0.2s ease;}  .create-slider-dots::before, .create-slider-dots::after {position: absolute;content: \'\';border-radius: 50%;transition: all 0.2s ease;}  .create-slider-dots::after {top: calc(50% - 10px);left: calc(50% - 10px);background: transparent;border: 1px solid #7EC2E3;width: 100%;height: 100%;transform: scale(0);}  .create-slider-dots::before {top: 50%;left: 50%;transform: translate(-50%, -50%);background: #3F3F3F;width: 40%;height: 40%;}  .feedback-slide-pltx-mobile .slick-active .create-slider-dots::before, .create-slider .slick-active .create-slider-dots::before, .create-slider-dots:hover::before {background: #7EC2E3;}  .feedback-slide-pltx-mobile .slick-active .create-slider-dots::after, .create-slider .slick-active .create-slider-dots::after, .create-slider-dots:hover::after {transform: scale(1);}</style><i class="create-slider-dots"></i>';
            },
            focusOnSelect: true
        });
    }
}
