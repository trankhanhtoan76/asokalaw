import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";

declare var $: any;

@Component({
    selector: 'app-tvlssupport',
    templateUrl: './tvlssupport.component.html',
    styleUrls: ['./tvlssupport.component.css']
})
export class TvlssupportComponent implements OnInit {
    name: string;
    email: string;
    phone: string;
    n;
    p;
    e;
    s1 = 'Luật sư đại diện giải quyết tranh chấp';
    s2 = 'Đăng ký kinh doanh';
    s3 = 'Đăng ký sở hữu trí tuệ';
    s4 = 'Đăng ký lưu hành sản phẩm trên thị trường';
    s5 = 'Đăng ký đầu tư';
    s6 = 'Quản trị pháp lý thường xuyên';
    service = [];

    constructor(private spinner: SpinnerService, private smtp: EmailService, public global: GlobalService) {
        if (this.global.locale != 'vi') {
            this.s1 = 'Dispute resolution through lawyers';
            this.s2 = 'Business Registration';
            this.s3 = 'Intellectual property protection';
            this.s4 = 'Product circulation registration';
            this.s5 = 'Investment registration';
            this.s6 = 'Regular legal management';
        }
    }

    ngOnInit(): void {
        $('.slide-support-pltxa').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: '<img src="/assets/media/landingpage/news/right.svg" class="nextArrowBtnVideo news">',
            prevArrow: '<img src="/assets/media/landingpage/news/left.svg" class="prevArrowBtnVideo news">',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]

        });
    }

    fieldValid(value, type?): boolean {
        if (value) {
            if (type == 'phone') {
                return /^\+?[0-9\s]{10,15}$/.test(value);
            } else if (type == 'email') {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }
            return true;
        }
        return false;
    }

    formValid(fields?: any): boolean {
        if (!fields) {
            this.name = this.name.trim();
            this.email = this.email.trim();
            this.phone = this.phone.trim();
            return this.fieldValid(this.name) && this.fieldValid(this.email, 'email') && this.fieldValid(this.phone, 'phone');
        } else {
            for (const key in fields) {
                if (fields.hasOwnProperty('key')) {
                    if (fields[key].hasOwnProperty('name')) {
                        if (fields[key].hasOwnProperty('type')) {
                            if (!this.fieldValid(fields[key].name, fields[key].type))
                                return false;
                        } else {
                            if (!this.fieldValid(fields[key].name))
                                return false;
                        }
                    }
                }
            }
            return true;
        }
    }

    selectService(e) {
        const index = this.service.indexOf(e.target.value);
        if (index == -1) {
            this.service.push(e.target.value);
        } else {
            this.service.splice(index, 1);
        }
    }

    submit(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Dịch vụ đăng ký', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Tư vấn luật sư: Đăng ký dịch vụ', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#tvlssupportModal').modal('hide');
            }
        );
    }
}
