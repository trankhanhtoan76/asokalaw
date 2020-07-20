import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dkkdfeedback',
  templateUrl: './dkkdfeedback.component.html',
  styleUrls: ['./dkkdfeedback.component.css']
})
export class DkkdfeedbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void {
    $('.feedback-slide-pltx').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: false,
      prevArrow: false,
      customPaging: function(slider, i) {
        return '<i class="fa fa-circle"></i>';
      },
      focusOnSelect: true
    });
  }
}
