import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-ktdn-feedback',
    templateUrl: './ktdn-feedback.component.html',
    styleUrls: ['../ktdn.component.css', './ktdn-feedback.component.css']
})
export class KtdnFeedbackComponent implements OnInit {
    initialized = false;
    data = [];

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        data.append('query', `
            select *
            from feedbackhome
            where page = 's1'
            order by created_at desc
        `);
        postAPI(data, function (res): void {
            self.data = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized) {
            this.initialized = true;
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
        }
    }
}
