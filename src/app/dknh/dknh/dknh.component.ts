import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";
import {FormValidateService} from "../../service/form-validate.service";
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dknh',
    templateUrl: './dknh.component.html',
    styleUrls: [
        './dknh.component.css',
        './dknh-mobile.component.css',
    ]
})
export class DknhComponent implements OnInit {
    logo1 = {
        data: '',
        ext: ''
    };
    logo2 = {
        data: '',
        ext: ''
    };
    logo3 = {
        data: '',
        ext: ''
    };
    name: string;
    email: string;
    phone: string;
    description: string;
    n;
    p;
    e;
    submitClick: boolean;


    constructor(private spinner: SpinnerService, private smtp: EmailService, public form: FormValidateService, public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    submit(): void {
        this.submitClick = true;
        this.n = this.e = this.p = true;
        if (!this.form.formValid([{value: this.name}, {value: this.phone, type: 'phone'}, {value: this.email, type: 'email'}])) return;

        this.spinner.show('sending');
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Mô tả', value: this.description}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        if (this.logo1.data) attachments.push({name: 'logo1.' + this.logo1.ext, data: this.logo1.data});
        if (this.logo2.data) attachments.push({name: 'logo2.' + this.logo2.ext, data: this.logo2.data});
        if (this.logo3.data) attachments.push({name: 'logo3.' + this.logo3.ext, data: this.logo3.data});
        this.smtp.send2(subject, 'Đăng ký nhãn hiệu', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dknhform1').modal('hide');

                //save data
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','${this.phone}','${this.email}','${this.description}','${nowDate}','Đăng ký nhãn hiệu')`);
                postAPI(data, function (res): void {
                });
            }
        );
    }
}
