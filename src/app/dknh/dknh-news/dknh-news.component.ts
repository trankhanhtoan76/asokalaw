import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dknh-news',
    templateUrl: './dknh-news.component.html',
    styleUrls: ['./dknh-news.component.css']
})
export class DknhNewsComponent implements OnInit {
    news;
    isInit: boolean;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        let wlocale;
        if (this.global.locale == 'vi') wlocale = 'is_english_only<>1';
        else wlocale = 'is_vi_only<>1';
        data.append('query', `
            select *
            from post
            where is_publish=1 and ${wlocale} and category_id like '%cf672b2938aed0ae281dd4cac0d9d305RnXj%'
            order by created_at desc
            limit 5
        `);
        postAPI(data, function (res): void {
            self.news = res;
        });
    }

    ngAfterViewChecked(): void {
        if (!this.isInit && this.news) {
            this.isInit = true;
            $('.list-slide').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                nextArrow: '<img src="' + '/assets/media/landingpage/news/right.svg" class="nextArrowBtnNews news">',
                prevArrow: '<img src="' + '/assets/media/landingpage/news/left.svg" class="prevArrowBtnNews news">',
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
