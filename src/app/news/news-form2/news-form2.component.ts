import {Component, OnInit} from '@angular/core';
import {EmailService} from "../../service/email.service";
import {SpinnerService} from "../../service/spinner.service";
import {FormValidateService} from "../../service/form-validate.service";
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-news-form2',
    templateUrl: './news-form2.component.html',
    styleUrls: [
        '../news.component.css',
        './news-form2.component.css']
})
export class NewsForm2Component implements OnInit {
    name;
    email;
    n;
    e;
    submitClick;
    service = [];
    s1 = 'Đăng ký kinh doanh';
    s2 = 'Đăng ký nhãn hiệu';
    s3 = 'Đăng ký đầu tư';
    s4 = 'Pháp lý thường xuyên';
    s5 = 'Tư vấn luật sư';
    s6 = 'Pháp lý sự kiện';
    s7 = 'Giải quyết tranh chấp';
    s8 = 'Lĩnh vực khác';

    constructor(private smtp: EmailService, private spinner: SpinnerService, public form: FormValidateService,public global: GlobalService) {
    }

    ngOnInit(): void {
        if(this.global.locale!='vi'){
            this.s1 = 'Business Registration';
            this.s2 = 'Trademark registration';
            this.s3 = 'Investment Registration';
            this.s4 = 'Regular Legal Services';
            this.s5 = 'Lawyers consultation';
            this.s6 = 'Events related legal matters';
            this.s7 = 'Dispute resolution';
            this.s8 = 'Other Fields';
        }
    }

    selectService(e) {
        const index = this.service.indexOf(e);
        if (index == -1) {
            this.service.push(e);
        } else {
            this.service.splice(index, 1);
        }
    }

    isSelectedService(s): boolean {
        const index = this.service.indexOf(s);
        if (index == -1) return false;
        return true;
    }

    submit(): void {
        this.submitClick = true;
        this.e = this.n = true;
        if (!this.form.formValid([{value: this.name}, {value: this.email, type: 'email'}])) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Email', value: this.email},
            {label: 'Dịch vụ', value: serviceString},
        ];
        const subject = '[Website] Khách hàng yêu cầu tư vấn: ' + this.name;
        this.smtp.send2(subject, 'Trang tin tức: ' + window.location.href, body).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');

                //save data
                const description = `Doanh: ${serviceString}`;
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','','${this.email}','${description}','${nowDate}','Tin tức')`);
                postAPI(data, function (res): void {
                });
            }
        );
    }
}
