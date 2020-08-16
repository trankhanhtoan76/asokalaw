import {Component, HostListener, OnInit} from '@angular/core';
import {SpinnerService} from '../service/spinner.service';
import {FormValidateService} from "../service/form-validate.service";
import {EmailService} from "../service/email.service";
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [SpinnerService]
})
export class HeaderComponent implements OnInit {
    fixedTop = '';
    styleBorderBottomMainMenu = '';
    name: string;
    phone: string;
    email: string;
    description: string;
    service: any;
    business: string;
    serviceTranslate: any;
    n;
    p;
    e;

    constructor(private spinner: SpinnerService, public form: FormValidateService, private smtp: EmailService, public global: GlobalService) {
        this.service = {
            dkkd: false,
            dknh: false,
            plsk: false,
            pltx: false,
            tvtt: false,
            xltc: false
        };
        this.serviceTranslate = {
            dkkd: 'Đăng ký kinh doanh',
            dknh: 'Đăng ký nhãn hiệu',
            plsk: 'Pháp lý sự kiện',
            pltx: 'Pháp lý thường xuyên',
            tvtt: 'Tư vấn trực tuyến',
            xltc: 'Giải quyết tranh chấp'
        };
    }

    ngOnInit(): void {
    }

    isMobileScreen(): boolean {
        return window.screen.width < 768;
    }

    @HostListener('window:scroll', ['$event'])
    // tslint:disable-next-line:typedef
    onWindowScroll() {
        if (document.documentElement.scrollTop >= 400) {
            this.fixedTop = 'fixed-top';
            this.styleBorderBottomMainMenu = 'border-bottom:solid 1px #acacac';
        } else {
            this.fixedTop = '';
            this.styleBorderBottomMainMenu = '';
        }
    }

    resetData(): void {
        this.name = '';
        this.phone = '';
        this.email = '';
        this.description = '';
        this.service = {
            dkkd: false,
            dknh: false,
            plsk: false,
            pltx: false,
            tvtt: false,
            xltc: false
        };
    }

    submit(): void {
        this.e = this.p = this.n = true;
        if (!this.form.formValid([{value: this.name}, {value: this.phone, type: 'phone'}, {value: this.email, type: 'email'}])) return;

        this.business = $('#home_business_type option:selected').text();
        this.spinner.show('Sending');
        let serviceReg = '';
        for (const s in this.service) {
            if (this.service.hasOwnProperty(s) && this.service[s] === true) {
                serviceReg += '<li>' + this.serviceTranslate[s] + '</li>';
            }
        }
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Vấn đề cần tư vấn', value: this.description},
            {label: 'Dịch vụ', value: serviceReg},
            {label: 'Lĩnh vực', value: this.business},
        ];

        this.smtp.send2('[Website] Đăng ký: ' + this.name, 'Đăng ký trang chủ', body).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#modalHomeAdvice').modal('hide');
                this.resetData();
                $('#home_business_type').val('');
            }
        );
    }
}
