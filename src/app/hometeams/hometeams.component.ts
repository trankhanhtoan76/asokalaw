import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-hometeams',
    templateUrl: './hometeams.component.html',
    styleUrls: ['./hometeams.component.css']
})
export class HometeamsComponent implements OnInit {
    isInstalled: boolean;
    teams = [
        {
            name: 'Lê Bình',
            title: 'Cố vấn',
            img: '/assets/media/teams/1.jpg',
            job: 'Kế toán - thuế - Lao động - BHXH'
        },
        {
            name: 'Đặng Thành Tài',
            title: 'Luật sư',
            img: '/assets/media/teams/2.jpg',
            job: 'Tranh chấp - Thương mại & Doanh nghiệp'
        },
        {
            name: 'Tâm Dương',
            title: 'Luật sư',
            img: '/assets/media/teams/3.jpg',
            job: 'Truyền thông - Sự kiện'
        },
        {
            name: 'Nguyễn Sơn Trà',
            title: 'Luật sư',
            img: '/assets/media/teams/4.jpg',
            job: 'Tranh chấp dân sự - Thương mại'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        if (!this.isInstalled) {
            this.isInstalled = true;
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
