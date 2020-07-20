import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-pltxsupport',
  templateUrl: './pltxsupport.component.html',
  styleUrls: ['./pltxsupport.component.css']
})
export class PltxsupportComponent implements OnInit {

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
      prevArrow: '<img src="/assets/media/landingpage/news/left.svg" class="prevArrowBtnVideo news">',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    });
  }
}
