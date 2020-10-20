import {Component, OnInit} from '@angular/core';
import {SpinnerService} from '../../service/spinner.service';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;
declare var Email: any;

@Component({
    selector: 'app-dkkdsupport',
    templateUrl: './dkkdsupport.component.html',
    styleUrls: ['./dkkdsupport.component.css'],
})
export class DkkdsupportComponent implements OnInit {
    name: string;
    phone: string;
    email: string;
    service: any;
    serviceT: any;
    description: string;
    n;
    p;
    e;

    constructor(private spinner: SpinnerService,public global: GlobalService) {
        this.service = [false, false, false, false, false, false, false];
        this.serviceT = [
            'Thay đổi đăng ký kinh doanh',
            'Quản trị pháp lý thường xuyên',
            'Đăng ký sở hữu trí tuệ',
            'Luật sư đại diện giải quyết tranh chấp',
            'Đăng ký lưu hành sản phẩm trên thị trường',
            'Đăng ký giấy phép hành nghề có điều kiện',
            'Dịch vụ khác'
        ];
    }

    ngOnInit(): void {
        if(this.global.locale!='vi'){
            this.serviceT = [
                'Change in business registration',
                'Regular legal management',
                'Intellectual property protection',
                'Dispute resolution through lawyers',
                'Product circulation registration',
                'Licenses for conditional business lines',
                'Other services'
            ];
        }
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

    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterContentInit(): void {
        $('.slide-support-pltx').slick({
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
                }
            ]
        });
    }

    showModal(): void {
        $('#dkkdform2').modal('show');
    }

    submit(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');

        let serviceTr = '';
        for (const i in this.service) {
            if (this.service[i] === true) {
                serviceTr += '<li>' + this.serviceT[i] + '</li>';
            }
        }

        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://admin.asokalaw.vn/upload/images/2bd08ed96c4fab05.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: Đăng ký kinh doanh - hỗ trợ doanh nghiệp toàn diện sau thành lập</h3>
        <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif;width: 40%">Họ tên:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.name}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Số điện thoại:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.phone}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Email:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.email}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Dịch vụ:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${serviceTr}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Mô tả:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.description}</td>
        </tr>
        </tbody></table><p style="border-top:1px solid #aaa;padding-top:15px">Trân trọng<br>
        <b></b></p></td><td width="40"></td></tr><tr><td height="22" colspan="3"></td>
        </tr></tbody></table></div></td></tr><tr><td height="16"></td></tr><tr><td align="left">
        <table cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td width="40"></td><td width="498"><div style="font-family:arial,Arial,sans-serif;font-size:11px;line-height:13px">
        ©2015 Công ty Luật TNHH Asoka,  228 Nguyễn Hoàng, P. An Phú, Quận 2, Tp. HCM
        </div></td><td width="40"></td></tr></tbody></table></td></tr><tr><td height="22"></td></tr></tbody></table></td></tr></tbody></table>
            `;
        Email.send({
            Host: 'smtp.gmail.com',
            Username: 'asoka@aramefiko.com',
            Password: 'tkt29101996',
            To: 'admin@aramefiko.com,consult@asokalaw.vn,support@asokalaw.vn',
            From: 'asoka@aramefiko.com',
            Subject: '[Website] Khách hàng đăng ký dịch vụ: ' + this.name,
            Body: body
        }).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dkkdform2').modal('hide');

                //save data
                const description = `Mô tả: ${this.description}\n
                                                    Gói dịch vụ: ${serviceTr}`;
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','${this.phone}','${this.email}','${description}','${nowDate}','Đăng ký kinh doanh - dịch vụ hỗ trợ')`);
                postAPI(data, function (res): void {
                });
            }
        );
    }
}
