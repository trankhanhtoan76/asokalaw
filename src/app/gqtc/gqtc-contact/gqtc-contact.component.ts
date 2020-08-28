import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-gqtc-contact',
  templateUrl: './gqtc-contact.component.html',
  styleUrls: [
    '../gqtc.component.css',
    './gqtc-contact.component.css'
  ]
})
export class GqtcContactComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

}
