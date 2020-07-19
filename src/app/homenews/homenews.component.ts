import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-homenews',
  templateUrl: './homenews.component.html',
  styleUrls: ['./homenews.component.css']
})
export class HomenewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.list-slide').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<img src="' + '/assets/media/landingpage/news/right.svg" class="nextArrowBtnNews news">',
      prevArrow: '<img src="' + '/assets/media/landingpage/news/left.svg" class="prevArrowBtnNews news">',
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
