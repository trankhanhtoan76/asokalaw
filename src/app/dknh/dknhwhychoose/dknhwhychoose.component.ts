import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dknhwhychoose',
  templateUrl: './dknhwhychoose.component.html',
  styleUrls: ['./dknhwhychoose.component.css']
})
export class DknhwhychooseComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
