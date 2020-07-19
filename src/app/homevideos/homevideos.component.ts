import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homevideos',
  templateUrl: './homevideos.component.html',
  styleUrls: ['./homevideos.component.css']
})
export class HomevideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    $('.list-slide-video').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnVideo">',
      prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnVideo">',
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
