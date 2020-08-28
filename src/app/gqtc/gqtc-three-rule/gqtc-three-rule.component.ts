import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-gqtc-three-rule',
  templateUrl: './gqtc-three-rule.component.html',
  styleUrls: [
    '../gqtc.component.css',
    './gqtc-three-rule.component.css'
  ]
})
export class GqtcThreeRuleComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
