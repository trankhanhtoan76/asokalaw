import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";
import {FormValidateService} from "../../service/form-validate.service";
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dknhintro',
    templateUrl: './dknhintro.component.html',
    styleUrls: ['./dknhintro.component.css']
})
export class DknhintroComponent implements OnInit {
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
    onSelectLogo: number;
    onSelectLogoData: any;
    formHeight: number;
    name: string;
    email: string;
    phone: string;
    description: string;
    n;
    p;
    e;

    constructor(private spinner: SpinnerService, private smtp: EmailService, public form: FormValidateService, public global: GlobalService) {
        this.formHeight = 440;
    }

    ngOnInit(): void {
    }

    isMobile(): boolean {
        return window.screen.width < 768;
    }


    changeFormHeight() {

        if (this.logo1.data || this.logo2.data || this.logo3.data) {
            if (this.isMobile()) {
                if (this.isFormValid()) {
                    this.formHeight = 520;
                } else {
                    this.formHeight = 570;
                }
            } else {
                if (this.isFormValid()) {
                    this.formHeight = 480;
                } else {
                    this.formHeight = 540;
                }
            }
        } else {
            if (this.isMobile()) {
                if (this.isFormValid()) {
                    this.formHeight = 470;
                } else {
                    this.formHeight = 520;
                }
            } else {
                if (this.isFormValid()) {
                    this.formHeight = 440;
                } else {
                    this.formHeight = 490;
                }
            }
        }
    }

    isFormValid(): boolean {
        return (this.form.formValid([{value: this.name}, {value: this.phone, type: 'phone'}, {value: this.email, type: 'email'}]));
    }

    submit(): void {
        this.n = this.e = this.p = true;
        this.changeFormHeight();
        if (!this.isFormValid()) return;

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
