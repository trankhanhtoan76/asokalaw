import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-hometeams',
  templateUrl: './hometeams.component.html',
  styleUrls: ['./hometeams.component.css']
})
export class HometeamsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.list-slide-team').slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: false,
      prevArrow: false,
      customPaging: function(slider, i) {
        return '<i class="fa fa-circle"></i>';
      },
      focusOnSelect: true,
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
