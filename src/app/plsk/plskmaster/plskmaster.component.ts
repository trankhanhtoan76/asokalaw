import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-plskmaster',
  templateUrl: './plskmaster.component.html',
  styleUrls: ['../plsk.component.css', './plskmaster.component.css']
})
export class PLSKMasterComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

}
