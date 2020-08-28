import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
  selector: 'app-dkkd3stepregistrate',
  templateUrl: './dkkd3stepregistrate.component.html',
  styleUrls: ['./dkkd3stepregistrate.component.css']
})
export class Dkkd3stepregistrateComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#dkkdform1').modal('show');
  }
}
