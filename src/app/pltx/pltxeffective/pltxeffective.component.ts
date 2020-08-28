import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-pltxeffective',
  templateUrl: './pltxeffective.component.html',
  styleUrls: ['./pltxeffective.component.css']
})
export class PltxeffectiveComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
