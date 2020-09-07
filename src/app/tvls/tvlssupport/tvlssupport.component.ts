import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
  selector: 'app-tvlssupport',
  templateUrl: './tvlssupport.component.html',
  styleUrls: ['./tvlssupport.component.css']
})
export class TvlssupportComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
    $('.slide-support-pltxa').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
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
        }]

    });
  }
}
