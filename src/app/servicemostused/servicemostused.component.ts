import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-servicemostused',
  templateUrl: './servicemostused.component.html',
  styleUrls: ['./servicemostused.component.css']
})
export class ServicemostusedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#headerButtonModal').click();
  }
}
