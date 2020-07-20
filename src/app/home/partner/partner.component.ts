import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.list-slide-partner').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnPartner">',
      prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnPartner">',
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
