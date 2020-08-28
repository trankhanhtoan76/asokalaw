import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-pltxcontact',
  templateUrl: './pltxcontact.component.html',
  styleUrls: ['./pltxcontact.component.css']
})
export class PltxcontactComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}
