import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dknhfeedback',
    templateUrl: './dknhfeedback.component.html',
    styleUrls: ['./dknhfeedback.component.css']
})
export class DknhfeedbackComponent implements OnInit {

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
            where page = 's5'
        `);
        postAPI(data, function (res): void {
            self.data = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized && this.data.length) {
            this.initialized = true;
            $('.slide-asoka-des').slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                nextArrow: false,
                prevArrow: false,
                focusOnSelect: true,
                asNavFor: '.slick-img',
            });
            $('.slick-img').slick({
                infinite: true,
                dot: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slide-asoka-des',
                dots: false,
                variableWidth: true,
                centerMode: true,
                focusOnSelect: true,
                nextArrow: false,
                prevArrow: false,
            });
        }
    }
}
