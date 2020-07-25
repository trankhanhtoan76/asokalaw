import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-qtlv',
  templateUrl: './qtlv.component.html',
  styleUrls: ['./qtlv.component.css']
})
export class QtlvComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.procedure-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<img src="/assets/media/chnn/procedure_right.svg" class="nextArrowBtnVideo news">',
      prevArrow: '<img src="/assets/media/chnn/procedure_left.svg" class="prevArrowBtnVideo news">',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
}
