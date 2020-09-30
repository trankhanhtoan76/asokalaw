import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {FormValidateService} from "../../service/form-validate.service";
import {EmailService} from "../../service/email.service";
import {SpinnerService} from "../../service/spinner.service";

declare var $: any;

@Component({
    selector: 'app-dnt3n-form2',
    templateUrl: './dnt3n-form2.component.html',
    styleUrls: [
        '../dnt3n.component.css',
        './dnt3n-form2.component.css'
    ]
})
export class Dnt3nForm2Component implements OnInit {
    name;
    email;
    phone;
    description;
    n;
    p;
    e;
    submitClick;
    service;
    s1 = 'Gói thương lượng';
    s1e = 'Negotiation Package';
    s2 = 'Gói tranh tụng';
    s2e = 'Litigation Package';
    s3 = 'Gói toàn diện';
    s3e = 'Comprehensive Package';
    attachment: string;
    attachmentName: string;

    constructor(public global: GlobalService, public form: FormValidateService, private smtp: EmailService, private spinner: SpinnerService) {
    }

    ngOnInit(): void {
    }

    onRemoveSelectedFile() {
        this.attachmentName = '';
        this.attachment = '';
    }

    onSelectFile(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const reader = new FileReader();
        this.attachmentName = e.srcElement.value.replace(/^.*[\\\/]/, '')
        reader.onload = this.readFile.bind(this);
        reader.readAsDataURL(file);
    }

    readFile(e) {
        let reader = e.target;
        this.attachment = reader.result;
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
            {label: 'Gói', value: this.service},
            {label: 'Mô tả', value: this.description},
        ];
        let attachments = [];
        if (this.attachment) attachments.push({name: this.attachmentName, data: this.attachment});
        const subject = '[Website] Khách hàng đăng ký: ' + this.name;
        this.smtp.send2(subject, 'Doanh nghiệp trên 3 năm - Đại diện giải quyết tranh chấp', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dnt3ngqtcform1').modal('hide');
            }
        );
    }
}
