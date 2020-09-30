import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-plskstudy-content',
    templateUrl: './plskstudy-content.component.html',
    styleUrls: [
        '../plsk.component.css',
        './plskstudy-content.component.css']
})
export class PLSKStudyContentComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        const w = window.innerWidth;
        const self = this;
        if (w > 768) {
            $('.study-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                nextArrow: '<img id="next33" src="/assets/media/DKDT/ly-do-dkdt/Asset 33.svg" class="prevArrowBtnFeedback feedback" style="margin-bottom: 30px;">',
                prevArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 32.svg" class=" nextArrowBtnFeedback feedback" style="margin-bottom: 30px;">',
                customPaging: function (slider, i) {
                    if (i === 0) {
                        if (self.global.locale != 'vi')
                            return '01. The event requires a license';
                        return '01. Sự kiện cần xin giấy phép';
                    } else if (i === 1) {
                        if (self.global.locale != 'vi')
                            return '02. \n' +
                                'Procedures for a license';
                        return '02. Thủ tục xin giấy phép';
                    } else if (i === 2) {
                        if (self.global.locale != 'vi')
                            return '03. \n' +
                                'Procedures for licensing (continued)';
                        return '03. Thủ tục xin giấy phép (tiếp)';
                    } else if (i === 3) {
                        if (self.global.locale != 'vi')
                            return '04. Partner contract';
                        return '04. Hợp đồng đối tác';
                    } else if (i === 4) {
                        if (self.global.locale != 'vi')
                            return '05. Handling the crisis';
                        return '05. Xử lý khủng hoảng';
                    } else {
                        if (self.global.locale != 'vi')
                            return '06 Group interaction and awarding of certificates';
                        return '06 Tương tác nhóm và trao chứng chỉ';
                    }
                },
                focusOnSelect: true
            });
        } else {
            $('.study-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                nextArrow: '',
                prevArrow: '',
                customPaging: function (slider, i) {
                    if (i === 0) {
                        if (self.global.locale != 'vi')
                            return '01. The event requires a license';
                        return '01. Sự kiện cần xin giấy phép';
                    } else if (i === 1) {
                        if (self.global.locale != 'vi')
                            return '02. \n' +
                                'Procedures for a license';
                        return '02. Thủ tục xin giấy phép';
                    } else if (i === 2) {
                        if (self.global.locale != 'vi')
                            return '03. \n' +
                                'Procedures for licensing (continued)';
                        return '03. Thủ tục xin giấy phép (tiếp)';
                    } else if (i === 3) {
                        if (self.global.locale != 'vi')
                            return '04. Partner contract';
                        return '04. Hợp đồng đối tác';
                    } else if (i === 4) {
                        if (self.global.locale != 'vi')
                            return '05. Handling the crisis';
                        return '05. Xử lý khủng hoảng';
                    } else {
                        if (self.global.locale != 'vi')
                            return '06 Group interaction and awarding of certificates';
                        return '06 Tương tác nhóm và trao chứng chỉ';
                    }
                },
                focusOnSelect: true,
            });
        }
    }
}

