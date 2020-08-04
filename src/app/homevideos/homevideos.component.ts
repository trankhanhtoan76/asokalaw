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
      nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnVideo" style="width: 25px">',
      prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnVideo" style="width: 25px">',
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
    $('.list-slide-video iframe').each(function () {
      const w = $(this).width();
      $(this).attr('height', parseInt(String(parseFloat(w) / 1.77), 10));
    });
  }
}
