import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dnt3n-feedback',
  templateUrl: './dnt3n-feedback.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-feedback.component.css'
  ]
})
export class Dnt3nFeedbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.create-slider').slick({
      dots:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      nextArrow: false,
      prevArrow: false,
      customPaging : function(slider, i) {
          return '<span class="create-slider-dots"></span>';
      },
      focusOnSelect: true
    });
  }
}
