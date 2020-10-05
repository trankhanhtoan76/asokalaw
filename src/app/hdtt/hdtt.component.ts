import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../service/global.service";

@Component({
  selector: 'app-hdtt',
  templateUrl: './hdtt.component.html',
  styleUrls: ['./hdtt.component.css']
})
export class HdttComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
