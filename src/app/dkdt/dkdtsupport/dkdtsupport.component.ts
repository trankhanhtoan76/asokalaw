import {Component, OnInit} from '@angular/core';
import {EmailService} from '../../service/email.service';
import {SpinnerService} from '../../service/spinner.service';
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-dkdtsupport',
    templateUrl: './dkdtsupport.component.html',
    styleUrls: ['./dkdtsupport.component.css']
})
export class DkdtsupportComponent implements OnInit {
    name;
    email;
    phone;
    s1 = 'Giấy phép lao động cho người nước ngoài';
    s2 = 'Thẻ tạm trú nhà đầu tư';
    s3 = 'Pháp lý thường xuyên';
    s4 = 'Dịch vụ khác';
    s4a1;
    s1Check = false;
    s2Check = false;
    s3Check = false;
    s4Check = false;
    n;
    e;
    p;

    constructor(private smtp: EmailService, private spinner: SpinnerService, public global: GlobalService) {
    }

    ngOnInit(): void {
        $('#dkdtsupport-sp01', '#dkdtsupport-sp02').magnificPopup({type: 'image'});
        if (this.global.locale != 'vi') {
            this.s1 = 'Work permits for foreigners';
            this.s2 = 'Investor temporary residence card';
            this.s3 = 'Legal routine';
            this.s4 = 'Other services';
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

    showRegistrationForm(service): void {
        switch (service) {
            case 1:
                this.s1Check = true;
                this.s2Check = false;
                this.s3Check = false;
                break;
            case 2:
                this.s2Check = true;
                this.s1Check = false;
                this.s3Check = false;
                break;
            case 3:
                this.s3Check = true;
                this.s2Check = false;
                this.s1Check = false;
                break;
        }
        $('#dkdtform2').modal('show');
    }

    submit(): void {
        this.p = this.n = this.e = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        let s = '';
        if (this.s1Check) {
            s += '<li>' + this.s1 + '</li>';
        }
        if (this.s2Check) {
            s += '<li>' + this.s2 + '</li>';
        }
        if (this.s3Check) {
            s += '<li>' + this.s3 + '</li>';
        }
        if (this.s4Check) {
            s += '<li>' + this.s4 + '</li>';
        }
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://admin.asokalaw.vn/upload/images/2bd08ed96c4fab05.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: Đăng ký đầu tư</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">Dịch vụ đăng ký:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${s}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Mô tả:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.s4a1}</td>
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
                $('#alert-success').modal('show');
                $('#dkdtform2').modal('hide');

                //save data
                const description = `dịch vụ: ${s}\n
                                                    mô tả: ${this.s4a1}`;
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','${this.phone}','${this.email}','${description}','${nowDate}','Đăng ký đầu tư - hỗ trợ')`);
                postAPI(data, function (res): void {
                });
            }
        );
    }
}
