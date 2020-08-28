import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dkkdbusinesstype',
  templateUrl: './dkkdbusinesstype.component.html',
  styleUrls: ['./dkkdbusinesstype.component.css']
})
export class DkkdbusinesstypeComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
