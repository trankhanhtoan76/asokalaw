import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dknhfeedback',
  templateUrl: './dknhfeedback.component.html',
  styleUrls: ['./dknhfeedback.component.css']
})
export class DknhfeedbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.slide-asoka-des').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: false,
      prevArrow: false,
      focusOnSelect: true,
      asNavFor: '.slick-img',
    });
    $('.slick-img').slick({
      infinite: true,
      dot: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slide-asoka-des',
      dots: false,
      variableWidth: true,
      centerMode: true,
      focusOnSelect: true,
      nextArrow: false,
      prevArrow: false,
    });
  }
}
