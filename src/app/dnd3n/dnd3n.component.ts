import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../service/spinner.service";
import {EmailService} from "../service/email.service";
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dnd3n',
    templateUrl: './dnd3n.component.html',
    styleUrls: ['./dnd3n.component.css']
})
export class Dnd3nComponent implements OnInit {

    name: string;
    phone: string;
    email: string;
    service = [];
    description: string;
    s1 = 'Quản trị 4 trong 1: pháp lý - thuế - hợp đồng - lao động';
    s2 = 'Đăng ký giấy phép ngành nghề có điều kiện';
    s3 = 'Đăng ký nhãn hiệu';
    s4 = 'Khác';
    n;
    p;
    e;

    constructor(private spinner: SpinnerService, private smtp: EmailService,public global: GlobalService) {
    }

    ngOnInit(): void {
        if(this.global.locale=='vi'){
            this.s1 = 'Quản trị 4 trong 1: pháp lý - thuế - hợp đồng - lao động';
            this.s2 = 'Đăng ký giấy phép ngành nghề có điều kiện';
            this.s3 = 'Đăng ký nhãn hiệu';
            this.s4 = 'Khác';
        }else{
            this.s1 = '"4 in 1" Governance: legal - contract - labor - tax';
            this.s2 = 'Registration of conditional business lines';
            this.s3 = 'Trademark registration';
            this.s4 = 'Other';
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

    selectService(e) {
        const index = this.service.indexOf(e);
        if (index == -1) {
            this.service.push(e);
        } else {
            this.service.splice(index, 1);
        }
    }

    childSelectService(e) {
        this.service = [e];
    }

    isSelectedService(s): boolean {
        const index = this.service.indexOf(s);
        if (index == -1) return false;
        return true;
    }

    submit(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        const serviceString = '<li>' + this.service.join('</li><li>') + '</li>';
        this.spinner.show('sending');
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://ci5.googleusercontent.com/proxy/-8AhuwEBWjbUauG2vyvW7r8a5aY2HZ9kZC00fhd_MiyExMPvQkH3XjyfGME-foH3AJigwdw1OkhD7o3RDAsPCB4=s0-d-e1-ft#https://www.asokalaw.vn/assets/images/logo.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: Doanh nghiệp dưới 3 năm</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">Gói dịch vụ:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${serviceString}</td>
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
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        this.smtp.send(subject, body).then(
            message => {
                this.spinner.hide();
                $('#dnd3nform1').modal('hide');
                $('#alert-success').modal('show');
            }
        );
    }
}
