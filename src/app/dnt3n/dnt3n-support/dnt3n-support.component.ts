import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dnt3n-support',
  templateUrl: './dnt3n-support.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-support.component.css'
  ]
})
export class Dnt3nSupportComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.slide-support-pltx').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '<img src="/assets/media/landingpage/news/right.svg" class="nextArrowBtnVideo news">',
      prevArrow: '<img src="/assets/media/landingpage/news/left.svg" class="prevArrowBtnVideo news">'

    });
  }
}
