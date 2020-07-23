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
