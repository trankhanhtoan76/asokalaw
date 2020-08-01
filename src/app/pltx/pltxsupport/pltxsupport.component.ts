import {Component, OnInit} from '@angular/core';
import {SpinnerService} from '../../service/spinner.service';
import {EmailService} from '../../service/email.service';

declare var $: any;

@Component({
  selector: 'app-pltxsupport',
  templateUrl: './pltxsupport.component.html',
  styleUrls: ['./pltxsupport.component.css']
})
export class PltxsupportComponent implements OnInit {
  name;
  email;
  phone;
  s1 = 'Thay đổi đăng ký kinh doanh';
  s2 = 'Đăng ký đầu tư';
  s3 = 'Đăng ký sở hữu trí tuệ';
  s4 = 'Luật sư đại diện xử lý tranh chấp';
  s5 = 'Đăng ký lưu hành sản phẩm trên thị trường';
  s6 = 'Đăng ký giấy phép ngành nghề có điều kiện';
  s7 = 'Dịch vụ khác';
  s7a1;
  s1Check = false;
  s2Check = false;
  s3Check = false;
  s4Check = false;
  s5Check = false;
  s6Check = false;
  s7Check = false;

  constructor(private spinner: SpinnerService, private smtp: EmailService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.slide-support-pltx').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
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

  submit(): void {
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
    if (this.s5Check) {
      s += '<li>' + this.s5 + '</li>';
    }
    if (this.s6Check) {
      s += '<li>' + this.s6 + '</li>';
    }
    if (this.s7Check) {
      s += '<li>' + this.s7 + '</li>';
    }
    const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://ci5.googleusercontent.com/proxy/-8AhuwEBWjbUauG2vyvW7r8a5aY2HZ9kZC00fhd_MiyExMPvQkH3XjyfGME-foH3AJigwdw1OkhD7o3RDAsPCB4=s0-d-e1-ft#https://www.asokalaw.vn/assets/images/logo.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: pháp lý thường xuyên</h3>
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
          <td style="padding:5px 0;font-family:arial,sans-serif">${this.s7a1}</td>
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
        // <Change>
        $('#alert-success').modal('show');
        $('#pltxform2').modal('hide');
        // </Change>
      }
    );
  }
}
