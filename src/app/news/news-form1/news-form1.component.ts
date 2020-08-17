import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";
import {FormValidateService} from "../../service/form-validate.service";

declare var $: any;

@Component({
    selector: 'app-news-form1',
    templateUrl: './news-form1.component.html',
    styleUrls: [
        '../news.component.css',
        './news-form1.component.css'
    ]
})
export class NewsForm1Component implements OnInit {
    name;
    email;
    e;
    submitClick;

    constructor(private spinner: SpinnerService, private smtp: EmailService, public form: FormValidateService) {
    }

    ngOnInit(): void {
    }

    submit(): void {
        this.submitClick = true;
        this.e = true;
        if (!this.form.formValid([{value: this.email, type: 'email'}])) return;

        this.spinner.show('sending');
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Email', value: this.email}
        ];
        const subject = '[Website] Khách hàng yêu cầu tư vấn: ' + this.name;
        this.smtp.send2(subject, 'Trang tin tức: ' + window.location.href, body).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
            }
        );
    }
}
