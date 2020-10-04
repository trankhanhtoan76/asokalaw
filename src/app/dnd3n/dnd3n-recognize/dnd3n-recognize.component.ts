import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";
import {EmailService} from "../../service/email.service";
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dnd3n-recognize',
    templateUrl: './dnd3n-recognize.component.html',
    styleUrls: [
        '../dnd3n.component.css',
        './dnd3n-recognize.component.css'
    ]
})
export class Dnd3nRecognizeComponent implements OnInit {
    logo1 = {
        data: '',
        ext: ''
    };
    logo2 = {
        data: '',
        ext: ''
    };
    logo3 = {
        data: '',
        ext: ''
    };
    onSelectLogo: number;
    onSelectLogoData: any;
    formHeight: number;
    name: string;
    email: string;
    phone: string;
    description: string;
    description2: string;
    n;
    p;
    e;
    service1 = [];
    service2 = [];
    service3 = [];
    service4 = [];
    service5 = [];
    attachmentName1;
    attachmentName2;
    attachmentName3;
    attachment1;
    attachment2;
    attachment3;
    currentReadfile = 0;

    constructor(private spinner: SpinnerService, private smtp: EmailService, public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    onRemoveSelectedFile(logo) {
        if (logo == 1) {
            this.logo1 = {data: '', ext: ''};
        } else if (logo == 2) {
            this.logo2 = {data: '', ext: ''};
        } else if (logo == 3) {
            this.logo3 = {data: '', ext: ''};
        }

        this.changeFormHeight();
    }

    onSelectFile(e, logo) {
        this.onSelectLogo = logo;
        this.onSelectLogoData = e;
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const pattern = /image-*/;
        const reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        if (logo == 1) {
            this.logo1.ext = e.srcElement.value.split('.').pop();
        } else if (logo == 2) {
            this.logo2.ext = e.srcElement.value.split('.').pop();
        } else if (logo == 3) {
            this.logo3.ext = e.srcElement.value.split('.').pop();
        }

        reader.onload = this.readFile.bind(this);
        reader.readAsDataURL(file);
    }

    readFile(e) {
        let reader = e.target;

        if (this.onSelectLogo == 1) {
            this.logo1.data = reader.result;
        } else if (this.onSelectLogo == 2) {
            this.logo2.data = reader.result;
        } else if (this.onSelectLogo == 3) {
            this.logo3.data = reader.result;
        }

        this.changeFormHeight();
    }

    onRemoveSelectedFile1() {
        this.attachmentName1 = '';
        this.attachment1 = '';
    }

    onSelectFile1(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const reader = new FileReader();
        this.currentReadfile = 1;
        this.attachmentName1 = e.srcElement.value.replace(/^.*[\\\/]/, '')
        reader.onload = this.readFile2.bind(this);
        reader.readAsDataURL(file);
    }

    readFile2(e) {
        let reader = e.target;
        if (this.currentReadfile == 1) {
            this.attachment1 = reader.result;
        } else if (this.currentReadfile == 2) {
            this.attachment2 = reader.result;
        } else {
            this.attachment3 = reader.result;
        }
    }

    onRemoveSelectedFile2() {
        this.attachmentName2 = '';
        this.attachment2 = '';
    }

    onSelectFile2(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const reader = new FileReader();
        this.currentReadfile = 2;
        this.attachmentName2 = e.srcElement.value.replace(/^.*[\\\/]/, '')
        reader.onload = this.readFile2.bind(this);
        reader.readAsDataURL(file);
    }

    onRemoveSelectedFile3() {
        this.attachmentName3 = '';
        this.attachment3 = '';
    }

    onSelectFile3(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const reader = new FileReader();
        this.currentReadfile = 3;
        this.attachmentName3 = e.srcElement.value.replace(/^.*[\\\/]/, '')
        reader.onload = this.readFile2.bind(this);
        reader.readAsDataURL(file);
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

    changeFormHeight() {
        if (this.logo1.data || this.logo2.data || this.logo3.data) {
            this.formHeight = 500;
        } else {
            this.formHeight = 450;
        }
    }

    submit(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const body = `<table width="620" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td bgcolor="#f5f5f5"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="16"></td> </tr> <tr> <td align="center"><img src="https://ci5.googleusercontent.com/proxy/-8AhuwEBWjbUauG2vyvW7r8a5aY2HZ9kZC00fhd_MiyExMPvQkH3XjyfGME-foH3AJigwdw1OkhD7o3RDAsPCB4=s0-d-e1-ft#https://www.asokalaw.vn/assets/images/logo.png" alt="Công ty Luật TNHH Asoka" style="width:200px" class="CToWUd"></td> </tr> <tr> <td height="16"></td> </tr> <tr> <td align="left" bgcolor="#fff"> <div style="border-style:solid;border-width:1px;border-color:#ccc"> <table width="578" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody> <tr> <td height="22" colspan="3"></td> </tr> <tr> <td width="40"></td> <td width="498">
        <h3 style="font-family:arial;font-size:16px">Chào Ban Quản Trị,</h3>
        <h3>Dịch vụ: Doanh nghiệp dưới 3 năm - Tra cứu logo</h3>
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
        let attachments = [];
        if (this.logo1.data) attachments.push({name: 'logo1.' + this.logo1.ext, data: this.logo1.data});
        if (this.logo2.data) attachments.push({name: 'logo2.' + this.logo2.ext, data: this.logo2.data});
        if (this.logo3.data) attachments.push({name: 'logo3.' + this.logo3.ext, data: this.logo3.data});
        this.smtp.send(subject, body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
            }
        );
    }

    selectService1(e) {
        const index = this.service1.indexOf(e.target.value);
        if (index == -1) {
            this.service1.push(e.target.value);
        } else {
            this.service1.splice(index, 1);
        }
    }

    submit1(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service1.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Doanh nghiệp của bạn còn thiếu loại giấy phép nào ?', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Các loại giấy phép phổ biến của lĩnh vực Công nghệ thông tin', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#cnttModal').modal('hide');
            }
        );
    }

    selectService2(e) {
        const index = this.service2.indexOf(e.target.value);
        if (index == -1) {
            this.service2.push(e.target.value);
        } else {
            this.service2.splice(index, 1);
        }
    }

    submit2(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service2.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Doanh nghiệp của bạn còn thiếu loại giấy phép nào ?', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Các loại giấy phép phổ biến của lĩnh vực Phân phối hàng hoá đặc biệt', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#pphhModal').modal('hide');
            }
        );
    }

    selectService3(e) {
        const index = this.service3.indexOf(e.target.value);
        if (index == -1) {
            this.service3.push(e.target.value);
        } else {
            this.service3.splice(index, 1);
        }
    }

    submit3(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service3.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Doanh nghiệp của bạn còn thiếu loại giấy phép nào ?', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Các loại giấy phép phổ biến của lĩnh vực Du lịch - Ăn uống', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#dlauModal').modal('hide');
            }
        );
    }

    selectService4(e) {
        const index = this.service4.indexOf(e.target.value);
        if (index == -1) {
            this.service4.push(e.target.value);
        } else {
            this.service4.splice(index, 1);
        }
    }

    submit4(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service4.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Doanh nghiệp của bạn còn thiếu loại giấy phép nào ?', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Các loại giấy phép phổ biến của lĩnh vực Truyền thông - Quảng cáo', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#ttqcModal').modal('hide');
            }
        );
    }

    selectService5(e) {
        const index = this.service5.indexOf(e.target.value);
        if (index == -1) {
            this.service5.push(e.target.value);
        } else {
            this.service5.splice(index, 1);
        }
    }

    submit5(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service5.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Doanh nghiệp của bạn còn thiếu loại giấy phép nào ?', value: serviceString}
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Các loại giấy phép phổ biến của lĩnh vực Giáo dục - Nghề nghiệp', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#gdnnModal').modal('hide');
            }
        );
    }

    submit6(): void {
        this.e = this.n = this.p = true;
        if (!this.formValid()) return;

        this.spinner.show('sending');
        const serviceString = '<li>' + this.service5.join('</li><li>') + '</li>';
        const body = [
            {label: 'Họ tên', value: this.name},
            {label: 'Số điện thoại', value: this.phone},
            {label: 'Email', value: this.email},
            {label: 'Mô tả', value: this.description2},
        ];
        const subject = '[Website] Khách hàng đăng ký dịch vụ: ' + this.name;
        let attachments = [];
        if (this.attachment1) attachments.push({name: this.attachmentName1, data: this.attachment1});
        if (this.attachment2) attachments.push({name: this.attachmentName2, data: this.attachment2});
        if (this.attachment3) attachments.push({name: this.attachmentName3, data: this.attachment3});
        this.smtp.send2(subject, 'Doanh nghiệp dưới 3 năm: Tra cứu giấy phép ngành nghề có điều kiện miễn phí', body, attachments).then(
            message => {
                this.spinner.hide();
                $('#alert-success').modal('show');
                $('#search-free-V').modal('hide');
            }
        );
    }
}
