import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";
import {postAPI} from "../helpers/api";

declare var $: any;

@Component({
    selector: 'app-homefeedback',
    templateUrl: './homefeedback.component.html',
    styleUrls: ['./homefeedback.component.css']
})
export class HomefeedbackComponent implements OnInit {
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
            where page = 'home'
        `);
        postAPI(data, function (res): void {
            self.data = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized && this.data.length) {
            this.initialized = true;
            $('.slide-asoka-des').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                nextArrow: false,
                prevArrow: false,
                focusOnSelect: true,
                customPaging: function (slider, i) {
                    return '<i class="fa fa-circle"></i>';
                },
            });
        }
    }
}
