import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-tvlseffective',
  templateUrl: './tvlseffective.component.html',
  styleUrls: ['./tvlseffective.component.css']
})
export class TvlseffectiveComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
