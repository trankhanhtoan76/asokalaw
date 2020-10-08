import {Component, HostListener, OnInit} from '@angular/core';
import {SpinnerService} from '../service/spinner.service';
import {FormValidateService} from "../service/form-validate.service";
import {EmailService} from "../service/email.service";
import {GlobalService} from "../service/global.service";
import {setCookie} from "../helpers/cookie";

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

    changeLang(lang): void {
        setCookie('asokalawlang', lang);
        const englishURI = {
            '/tam-nhin-su-menh': '/vision-mission',
            '/co-hoi-nghe-nghiep': '/careers',
            '/khoi-tao-doanh-nghiep': '/business-establishment',
            '/doanh-nghiep-duoi-3-nam': '/business-under-3-years',
            '/doanh-nghiep-tren-3-nam': '/business-over-3-years',
            '/dang-ky-nhan-hieu': '/trademark-registration',
            '/dang-ky-kinh-doanh': '/business-registration',
            '/dang-ky-dau-tu': '/investment-registration',
            '/phap-ly-thuong-xuyen': '/regular-legal-service',
            '/tu-van-luat-su': '/lawyer-consultation',
            '/phap-ly-su-kien': '/event-related-legal-service',
            '/giai-quyet-tranh-chap': '/dispute-resolution',
            '/tin-tuc': '/news',
            '/cau-hoi-thuong-gap': '/faq',
            '/quy-trinh-lam-viec': '/working-process',
            '/lien-he': '/contact-us',
            '/chinh-sach-khach-hang': '/terms-of-use',
            '/huong-dan-thanh-toan': '/payment-terms',
            '/danh-muc/tin-tuc-phap-ly': '/category/legal-news',
            '/danh-muc/uu-dai': '/category/promotion',
            '/danh-muc/tin-tuc-asoka': '/category/asoka-news'
        };
        const vietnameseURI = {
            '/vision-mission': '/tam-nhin-su-menh',
            '/careers': '/co-hoi-nghe-nghiep',
            '/business-establishment': '/khoi-tao-doanh-nghiep',
            '/business-under-3-years': '/doanh-nghiep-duoi-3-nam',
            '/business-over-3-years': '/doanh-nghiep-tren-3-nam',
            '/trademark-registration': '/dang-ky-nhan-hieu',
            '/business-registration': '/dang-ky-kinh-doanh',
            '/investment-registration': '/dang-ky-dau-tu',
            '/regular-legal-service': '/phap-ly-thuong-xuyen',
            '/lawyer-consultation': '/tu-van-luat-su',
            '/event-related-legal-service': '/phap-ly-su-kien',
            '/dispute-resolution': '/giai-quyet-tranh-chap',
            '/news': '/tin-tuc',
            '/faq': '/cau-hoi-thuong-gap',
            '/working-process': '/quy-trinh-lam-viec',
            '/contact-us': '/lien-he',
            '/terms-of-use': '/chinh-sach-khach-hang',
            '/payment-terms': '/huong-dan-thanh-toan',
            '/category/legal-news': '/danh-muc/tin-tuc-phap-ly',
            '/category/promotion': '/danh-muc/uu-dai',
            '/category/asoka-news': '/danh-muc/tin-tuc-asoka'
        };
        if (lang == 'en') {
            if (englishURI.hasOwnProperty(window.location.pathname)) {
                window.location.href = englishURI[window.location.pathname];
            } else {
                window.location.reload();
            }
        } else {
            if (vietnameseURI.hasOwnProperty(window.location.pathname)) {
                window.location.href = vietnameseURI[window.location.pathname];
            } else {
                window.location.reload();
            }
        }
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
