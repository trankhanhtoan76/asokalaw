import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../service/spinner.service";

declare var $: any;
declare var Email: any;

@Component({
    selector: 'app-chnn',
    templateUrl: './chnn.component.html',
    styleUrls: ['./chnn.component.css']
})
export class ChnnComponent implements OnInit {
    name;
    email;
    phone;
    facebook;
    position;
    cv;
    reason;

    constructor(private spinner: SpinnerService) {
    }

    ngOnInit(): void {
    }

    scroll(id) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
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

    submit(): void {
        this.spinner.show('Sending');
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://ci5.googleusercontent.com/proxy/-8AhuwEBWjbUauG2vyvW7r8a5aY2HZ9kZC00fhd_MiyExMPvQkH3XjyfGME-foH3AJigwdw1OkhD7o3RDAsPCB4=s0-d-e1-ft#https://www.asokalaw.vn/assets/images/logo.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3 style="font-family:arial;font-size:16px">Nộp đơn tuyển dụng</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">Facebook:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.facebook}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Vị trí ứng tuyển:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.position}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">CV:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.cv}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Lý do ứng tuyển:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.reason}</td>
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
            Subject: '[Website] Đăng ký ứng tuyển: ' + this.name,
            Body: body
        }).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
            }
        );
    }
}
