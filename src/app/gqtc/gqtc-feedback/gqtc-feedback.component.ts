import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-gqtc-feedback',
    templateUrl: './gqtc-feedback.component.html',
    styleUrls: [
        '../gqtc.component.css',
        './gqtc-feedback.component.css'
    ]
})
export class GqtcFeedbackComponent implements OnInit {

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
            where page = 's10'
        `);
        postAPI(data, function (res): void {
            self.data = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized && this.data.length) {
            this.initialized = true;
            $('.feedback-slide-pltx').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,

                autoplaySpeed: 4000,
                nextArrow: '<img src="/assets/media/GQTC/xu_ly_thanh_cong/Asset 33.svg" class="nextArrowBtnFeedback feedback">',
                prevArrow: '<img src="/assets/media/GQTC/xu_ly_thanh_cong/Asset 32.svg" class="prevArrowBtnFeedback feedback">',
                customPaging: function (slider, i) {
                    return '<i class="fa fa-circle"></i>';
                },
                focusOnSelect: true
            });
        }
    }
}
