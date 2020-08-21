import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dnd3n-feedback',
    templateUrl: './dnd3n-feedback.component.html',
    styleUrls: [
        '../dnd3n.component.css',
        './dnd3n-feedback.component.css'
    ]
})
export class Dnd3nFeedbackComponent implements OnInit {
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
            where page = 's2'
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
                autoplay: false,
                autoplaySpeed: 4000,
                nextArrow: false,
                prevArrow: false,
                customPaging: function (slider, i) {
                    return '<span class="create-dots-circle"></span>';
                },
                focusOnSelect: true
            });
        }
    }
}
