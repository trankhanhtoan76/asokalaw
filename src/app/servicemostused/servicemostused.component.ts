import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
  selector: 'app-servicemostused',
  templateUrl: './servicemostused.component.html',
  styleUrls: ['./servicemostused.component.css']
})
export class ServicemostusedComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#headerButtonModal').click();
  }
}
