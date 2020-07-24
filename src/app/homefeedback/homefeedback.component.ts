import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-homefeedback',
  templateUrl: './homefeedback.component.html',
  styleUrls: ['./homefeedback.component.css']
})
export class HomefeedbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.slide-asoka-des').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: false,
      prevArrow: false,
      focusOnSelect: true,
      customPaging: function(slider, i) {
        return '<i class="fa fa-circle"></i>';
      },
    });
  }
}