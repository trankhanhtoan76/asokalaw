import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-homepricing',
  templateUrl: './homepricing.component.html',
  styleUrls: ['./homepricing.component.css']
})
export class HomepricingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    $('#headerButtonModal').click();
  }
}
