import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dkkdpricing',
  templateUrl: './dkkdpricing.component.html',
  styleUrls: ['./dkkdpricing.component.css']
})
export class DkkdpricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(): void {
    $('#dkkdform1').modal('show');
  }
}
