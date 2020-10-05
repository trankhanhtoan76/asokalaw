import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../service/global.service";

@Component({
  selector: 'app-cskh',
  templateUrl: './cskh.component.html',
  styleUrls: ['./cskh.component.css']
})
export class CskhComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
