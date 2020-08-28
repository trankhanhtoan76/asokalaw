import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dnd3n-reason',
  templateUrl: './dnd3n-reason.component.html',
  styleUrls: [
    '../dnd3n.component.css',
    './dnd3n-reason.component.css'
  ]
})
export class Dnd3nReasonComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
