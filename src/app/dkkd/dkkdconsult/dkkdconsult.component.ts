import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dkkdconsult',
  templateUrl: './dkkdconsult.component.html',
  styleUrls: ['./dkkdconsult.component.css']
})
export class DkkdconsultComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#dkkdform1').modal('show');
  }
}
