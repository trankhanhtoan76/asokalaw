import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-tvlscontact',
  templateUrl: './tvlscontact.component.html',
  styleUrls: ['./tvlscontact.component.css']
})
export class TvlscontactComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
