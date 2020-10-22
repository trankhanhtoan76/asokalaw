import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {postAPI} from "../../helpers/api";
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-global-lawyer',
    templateUrl: './global-lawyer.component.html',
    styleUrls: ['./global-lawyer.component.css']
})
export class GlobalLawyerComponent implements OnInit {
    @Output() showregistrationform = new EventEmitter();
    initialized = false;
    data = [];

    constructor(public global: GlobalService) {
    }

    submit(e): void {
        this.showregistrationform.emit(e);
    }

    ngOnInit(): void {
        const self = this;
        const data = new FormData();
        data.append('action', 'get_records');
        data.append('query', `
            select *
            from lawyer
        `);
        postAPI(data, function (res): void {
            for (let item of res) {
                item.exp = item.exp.split("\n");
                item.en_exp = item.en_exp.split("\n");
                item.cert = item.cert.split("\n");
                item.en_cert = item.en_cert.split("\n");
                self.data.push(item);
            }
            console.log(self.data);
        });
    }

    ngAfterViewChecked(): void {
        if (!this.initialized && this.data.length) {
            this.initialized = true;
            const $ctrl = $('.controller-tabs-popular');
            $ctrl.slick({
                infinite: true,
                slidesToShow: 4,
                focusOnSelect: true,
                centerMode: true,
                slidesToScroll: 1,
                autoplaySpeed: 4000,
                nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nutmuiten nuttienlen">',
                prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="nutmuiten nutluilai">',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $ctrl.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                let activeEle;
                let dataTarget;
                // if (currentSlide === 7 && nextSlide === 0) {
                //     activeEle = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]');
                //     dataTarget = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]').data('target');
                // } else {
                //     if (currentSlide < nextSlide) {
                //         activeEle = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]');
                //         dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]').data('target');
                //     } else {
                //         activeEle = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]');
                //         dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]').data('target');
                //     }
                // }

                activeEle = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide) + '"]');
                dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide) + '"]').data('target');


                $('.controller-tabs-popular div').removeClass('active');
                activeEle.addClass('active');

                $('div.tab-pane-business').css('display', 'none');
                $(dataTarget + '.tab-pane-business').css('display', 'flex');
               
            });

            // $('.tab-content .tab-pane-business:nth-child(2)').css('display', 'flex');
            // $('.nextArrowBtnNews').click();
        }
    }
}
