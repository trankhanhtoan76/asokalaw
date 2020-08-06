import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dnd3n-feedback',
  templateUrl: './dnd3n-feedback.component.html',
  styleUrls: [
    '../dnd3n.component.css',
    './dnd3n-feedback.component.css'
  ]
})
export class Dnd3nFeedbackComponent implements OnInit {

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
          return '<span class="create-dots-circle"></span>';
      },
      focusOnSelect: true
    });
  }
}
