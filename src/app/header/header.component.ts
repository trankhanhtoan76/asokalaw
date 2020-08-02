import {Component, HostListener, OnInit} from '@angular/core';
import {SpinnerService} from '../service/spinner.service';

declare var Email: any;
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

    constructor(private spinner: SpinnerService) {
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
            xltc: 'Xử lý tranh chấp'
        };
    }

    ngOnInit(): void {
    }

    fieldValid(value, type?): boolean {
        if (value) {
            if (type == 'phone') {
                return /^[0-9]{8,15}$/.test(value);
            } else if (type == 'email') {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }
            return true;
        }
        return false;
    }

    formValid(fields?: any): boolean {
        if (!fields) {
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
        this.business = $('#home_business_type option:selected').text();
        this.spinner.show('Sending');
        let serviceReg = '';
        for (const s in this.service) {
            if (this.service.hasOwnProperty(s) && this.service[s] === true) {
                serviceReg += '<li>' + this.serviceTranslate[s] + '</li>';
            }
        }
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://ci5.googleusercontent.com/proxy/-8AhuwEBWjbUauG2vyvW7r8a5aY2HZ9kZC00fhd_MiyExMPvQkH3XjyfGME-foH3AJigwdw1OkhD7o3RDAsPCB4=s0-d-e1-ft#https://www.asokalaw.vn/assets/images/logo.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">Vấn đề cần tư vấn:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.description}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Dịch vụ cần tư vấn:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${serviceReg}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Lĩnh vực quan tâm:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.business}</td>
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
            Username: 'trankhanhtoan321@gmail.com',
            Password: 'BUKT25041996',
            To: 'AsokaLaw<toan.tran@dotb.vn>,Hanh Trinh<hanhtrinh@flowmedia.vn>,Binh<binhcover98@gmail.com>',
            From: 'trankhanhtoan321@gmail.com',
            Subject: '[Website] Khách hàng đăng ký: ' + this.name,
            Body: body
        }).then(
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
