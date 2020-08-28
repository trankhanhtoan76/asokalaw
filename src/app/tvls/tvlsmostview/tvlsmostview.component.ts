import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-tvlsmostview',
  templateUrl: './tvlsmostview.component.html',
  styleUrls: ['./tvlsmostview.component.css']
})
export class TvlsmostviewComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
