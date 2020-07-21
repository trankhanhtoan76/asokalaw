import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gqtc-feedback',
  templateUrl: './gqtc-feedback.component.html',
  styleUrls: [
    '../gqtc.component.css',
    './gqtc-feedback.component.css'
  ]
})
export class GqtcFeedbackComponent implements OnInit {

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

      autoplaySpeed: 4000,
      nextArrow: '<img src="/assets/media/GQTC/xu_ly_thanh_cong/Asset 33.svg" class="nextArrowBtnFeedback feedback">',
      prevArrow: '<img src="/assets/media/GQTC/xu_ly_thanh_cong/Asset 32.svg" class="prevArrowBtnFeedback feedback">',
      customPaging: function(slider, i) {
        return '<i class="fa fa-circle"></i>';
      },
      focusOnSelect: true
    });
  }
}
