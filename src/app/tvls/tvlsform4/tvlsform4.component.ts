import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";
import {GlobalService} from "../../service/global.service";
import {postAPI} from "../../helpers/api";

declare var $: any;

@Component({
    selector: 'app-tvlsform4',
    templateUrl: './tvlsform4.component.html',
    styleUrls: ['./tvlsform4.component.css']
})
export class Tvlsform4Component implements OnInit {
    name: string;
    email: string;
    phone: string;
    numberQuestion = 30;
    attachment: string;
    attachmentName: string;
    total = 1000000;
    checkTerm: boolean;
    t;
    p;
    e;
    n;

    constructor(private spinner: SpinnerService, private smtp: EmailService,public global: GlobalService) {
    }

    ngOnInit(): void {
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

    closeModal() {
        // @ts-ignore
        window.lastModal = '#tvlsform4';
        $('#tvlsform2,#tvlsform3,#tvlsform4').modal('hide');
        $('#tvlsdialogconfirm').modal('show');
    }

    submit(): void {
        this.t = this.e = this.p = this.n = true;
        if (!this.checkTerm || !this.formValid()) return;

        const type = $('select[name="type"]').val();
        this.spinner.show('sending');
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://admin.asokalaw.vn/upload/images/2bd08ed96c4fab05.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: Tư vấn luật sư</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">Lĩnh vực:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${type}</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Gói:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">Tư vấn trực tiếp</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Thời gian tư vấn:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.numberQuestion} phút</td>
        </tr>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif">Tạm tính:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.total}</td>
        </tr>
        </tbody></table><p style="border-top:1px solid #aaa;padding-top:15px">Trân trọng<br>
        <b></b></p></td><td width="40"></td></tr><tr><td height="22" colspan="3"></td>
        </tr></tbody></table></div></td></tr><tr><td height="16"></td></tr><tr><td align="left">
        <table cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td width="40"></td><td width="498"><div style="font-family:arial,Arial,sans-serif;font-size:11px;line-height:13px">
        ©2015 Công ty Luật TNHH Asoka,  228 Nguyễn Hoàng, P. An Phú, Quận 2, Tp. HCM
        </div></td><td width="40"></td></tr></tbody></table></td></tr><tr><td height="22"></td></tr></tbody></table></td></tr></tbody></table>
            `;
        const subject = '[Website] Khách hàng đăng ký tư vấn luật sư: ' + this.name;
        let attachments = [];
        if (this.attachment) attachments.push({name: this.attachmentName, data: this.attachment});
        this.smtp.send(subject, body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#tvlsform4').modal('hide');

                //save data
                const description = `lĩnh vực: ${type}\ngói: tư vấn trực tiếp\nthời gian tư vấn: ${this.numberQuestion}\n tạm tính: ${this.total}`;
                const data = new FormData();
                const now = new Date();
                const id = new Date().getTime();
                const nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                data.append('query', `insert into customer(id,name,phone,email,description,created_at,service)
                                                    values('${id}','${this.name}','${this.phone}','${this.email}','${description}','${nowDate}','Tư vấn luật sư')`);
                postAPI(data, function (res): void {
                });
            }
        );
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
}
