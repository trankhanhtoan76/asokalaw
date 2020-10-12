import {Component, OnInit} from '@angular/core';
import {SpinnerService} from '../service/spinner.service';
import {GlobalService} from "../service/global.service";

declare var Email: any;
declare var $: any;

@Component({
  selector: 'app-footeremailsubcribe',
  templateUrl: './footeremailsubcribe.component.html',
  styleUrls: ['./footeremailsubcribe.component.css']
})
export class FooteremailsubcribeComponent implements OnInit {
  email: string;

  constructor(private spinner: SpinnerService,public global: GlobalService) {
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

  submit(): void {
    this.spinner.show('Sending');
    const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://admin.asokalaw.vn/upload/images/2bd08ed96c4fab05.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody>
        <tr>
          <td style="padding:5px 0;font-family:arial,sans-serif;width: 40%">Đăng ký nhận ưu đãi mới nhất:</td>
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.email}</td>
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
      Subject: '[Website] Khách hàng đăng ký nhận ưu đãi mới nhất: ' + this.email,
      Body: body
    }).then(
      message => {
        this.spinner.hide();
        $('#alert-success').modal('show');
        this.email = '';
      }
    );
  }
}
