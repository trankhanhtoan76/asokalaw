import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-gqtc-recognize',
  templateUrl: './gqtc-recognize.component.html',
  styleUrls: ['../gqtc.component.css', './gqtc-recognize.component.css']
})
export class GqtcRecognizeComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

}
