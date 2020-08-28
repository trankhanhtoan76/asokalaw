import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-tvlsservice',
  templateUrl: './tvlsservice.component.html',
  styleUrls: ['./tvlsservice.component.css']
})
export class TvlsserviceComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
