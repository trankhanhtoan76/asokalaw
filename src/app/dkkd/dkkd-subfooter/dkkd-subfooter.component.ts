import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dkkd-subfooter',
  templateUrl: './dkkd-subfooter.component.html',
  styleUrls: ['./dkkd-subfooter.component.css']
})
export class DkkdSubfooterComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
