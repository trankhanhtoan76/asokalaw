import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dkkd3stepregistrate',
  templateUrl: './dkkd3stepregistrate.component.html',
  styleUrls: ['./dkkd3stepregistrate.component.css']
})
export class Dkkd3stepregistrateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#dkkdform1').modal('show');
  }
}
