import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dknhcustomer',
  templateUrl: './dknhcustomer.component.html',
  styleUrls: ['./dknhcustomer.component.css']
})
export class DknhcustomerComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
