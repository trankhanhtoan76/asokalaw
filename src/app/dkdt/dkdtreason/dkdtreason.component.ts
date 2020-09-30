import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dkdtreason',
    templateUrl: './dkdtreason.component.html',
    styleUrls: ['./dkdtreason.component.css']
})
export class DkdtreasonComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        const self = this;
        $('.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 33.svg" class="prevArrowBtnFeedback feedback">',
            prevArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 32.svg" class=" nextArrowBtnFeedback feedback">',
            customPaging: function (slider, i) {
                if (i === 0) {
                    if (self.global.locale != 'vi')
                        return '<b>01</b> Trusted by 99% clients';
                    return '<b>01</b> 99% khách hàng cũ hài lòng';
                } else if (i === 1) {
                    if (self.global.locale != 'vi')
                        return '<b>02</b> Diverse and international investors';
                    return '<b>02</b> Nhà đầu tư đa dạng, toàn cầu';
                } else {
                    if (self.global.locale != 'vi')
                        return '<b>03</b> Competitive, clearly listed prices and fees';
                    return '<b>03</b> Giá phí cạnh tranh, niêm yết rõ ràng';
                }

            },
            focusOnSelect: true
        });
    }
}
