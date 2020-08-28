import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dnd3n-excusion',
  templateUrl: './dnd3n-excusion.component.html',
  styleUrls: ['./dnd3n-excusion.component.css']
})
export class Dnd3nExcusionComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
