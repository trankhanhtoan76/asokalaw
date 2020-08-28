import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dnt3n-excusion',
  templateUrl: './dnt3n-excusion.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-excusion.component.css'
  ]
})
export class Dnt3nExcusionComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
