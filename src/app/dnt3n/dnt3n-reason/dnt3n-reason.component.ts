import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dnt3n-reason',
  templateUrl: './dnt3n-reason.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-reason.component.css'
  ]
})
export class Dnt3nReasonComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
