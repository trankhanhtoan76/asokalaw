import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $: any;

@Component({
  selector: 'app-gqtc-reason',
  templateUrl: './gqtc-reason.component.html',
  styleUrls: [
    '../gqtc.component.css',
    './gqtc-reason.component.css'
  ]
})
export class GqtcReasonComponent implements OnInit {

  constructor(public global: GlobalService) { }
  // <Change>
  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }
  // </Change>
}
