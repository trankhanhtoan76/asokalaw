import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-tvlslawyer',
  templateUrl: './tvlslawyer.component.html',
  styleUrls: ['./tvlslawyer.component.css']
})
export class TvlslawyerComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
