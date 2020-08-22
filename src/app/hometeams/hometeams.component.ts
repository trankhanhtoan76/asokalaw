import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";
import {postAPI} from "../helpers/api";

declare var $: any;

@Component({
    selector: 'app-hometeams',
    templateUrl: './hometeams.component.html',
    styleUrls: ['./hometeams.component.css']
})
export class HometeamsComponent implements OnInit {
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
            from teamhome
        `);
        postAPI(data, function (res): void {
            self.data = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized && this.data.length) {
            this.initialized = true;
            $('.list-slide-team').slick({
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                nextArrow: false,
                prevArrow: false,
                customPaging: function (slider, i) {
                    return '<i class="fa fa-circle"></i>';
                },
                focusOnSelect: true,
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
        }
    }
}
