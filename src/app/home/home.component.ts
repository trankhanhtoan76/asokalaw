import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#headerButtonModal').click();
  }
}
