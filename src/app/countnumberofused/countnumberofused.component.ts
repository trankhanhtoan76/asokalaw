import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../service/global.service";

@Component({
  selector: 'app-countnumberofused',
  templateUrl: './countnumberofused.component.html',
  styleUrls: ['./countnumberofused.component.css']
})
export class CountnumberofusedComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
