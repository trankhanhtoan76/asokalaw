import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {FormValidateService} from "../../service/form-validate.service";
import {EmailService} from "../../service/email.service";
import {SpinnerService} from "../../service/spinner.service";

declare var $: any;

@Component({
    selector: 'app-dnt3n-recognize',
    templateUrl: './dnt3n-recognize.component.html',
    styleUrls: [
        '../dnt3n.component.css',
        './dnt3n-recognize.component.css'
    ]
})
export class Dnt3nRecognizeComponent implements OnInit {
    name;
    email;
    phone;
    company;
    business;
    description;
    package;
    n;
    p;
    e;
    submitClick;
    service;
    s1 = 'Dưới 05 lao động';
    s1e = 'Under 5 employees';
    s2 = 'Từ 06 đến 10 lao động';
    s2e = '06 -10 employees';
    p1 = 'Gói cơ bản';
    p2 = 'Gói toàn diện';

    constructor(public global: GlobalService, public form: FormValidateService, private smtp: EmailService, private spinner: SpinnerService) {
    }

    ngOnInit(): void {
    }

    submit(): void {
        this.submitClick = true;
        this.e = this.n = this.p = true;
        if (!this.form.formValid([{value: this.name}, {value: this.email, type: 'email'}, {value: this.phone, type: 'phone'}])) return;

        this.spinner.show('sending');
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Lĩnh vực kinh doanh', value: this.business},
            {label: 'Tên công ty', value: this.company},
            {label: 'Quy mô công ty', value: this.service},
            {label: 'Gói', value: this.package},
            {label: 'Mô tả', value: this.description},
        ];
        const subject = '[Website] Khách hàng đăng ký pháp lý doanh nghiệp: ' + this.name;
        this.smtp.send2(subject, 'Doanh nghiệp trên 3 năm - Rà soát và vá lỗi', body).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dnt3nform-formdangkychungcho1va3').modal('hide');
            }
        );
    }

}
