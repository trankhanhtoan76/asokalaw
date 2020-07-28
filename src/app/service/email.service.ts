import {Injectable} from '@angular/core';

declare var Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
  }

  // tslint:disable-next-line:typedef
  send(subject, body) {
    return Email.send({
      Host: 'smtp.gmail.com',
      Username: 'trankhanhtoan321@gmail.com',
      Password: 'BUKT25041996',
      To: 'AsokaLaw<toan.tran@dotb.vn>,Hanh<hanhtrinh@asokalaw.vn>',
      From: 'trankhanhtoan321@gmail.com',
      Subject: subject,
      Body: body
    });
  }
}
