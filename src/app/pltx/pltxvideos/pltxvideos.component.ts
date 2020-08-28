import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
  selector: 'app-pltxvideos',
  templateUrl: './pltxvideos.component.html',
  styleUrls: ['./pltxvideos.component.css']
})
export class PltxvideosComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
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
  }
}
