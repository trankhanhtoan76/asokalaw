import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {FormValidateService} from "../../service/form-validate.service";
import {EmailService} from "../../service/email.service";
import {SpinnerService} from "../../service/spinner.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dnt3n-form3',
    templateUrl: './dnt3n-form3.component.html',
    styleUrls: ['../dnt3n.component.css', './dnt3n-form3.component.css']
})
export class Dnt3nForm3Component implements OnInit {
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
    p1 = 'Gói tạm ngưng';
    p1e = 'Temporary Suspension Package';
    p2 = 'Gói giải thể';
    p2e = 'Dissolution Package';

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
        const subject = '[Website] Khách hàng đăng ký: ' + this.name;
        const subSubject = 'Doanh nghiệp trên 3 năm - Tạm ngưng - giải thể';
        this.smtp.send2(subject, subSubject, body).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dnt3nform3').modal('hide');

                //save data
                const description = `lĩnh vực kinh doanh: ${this.business}\n tên công ty: ${this.company}\n quy mô công ty: ${this.service}\n gói: ${this.package}\n mô tả: ${this.description}`;
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','${this.phone}','${this.email}','${description}','${nowDate}','Doanh nghiệp trên 3 năm - tạm ngưng - giải thể')`);
                postAPI(data, function (res): void {
                });
            }
        );
    }

}
