import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gqtc-team',
  templateUrl: './gqtc-team.component.html',
  styleUrls: [
    '../gqtc.component.css',
    './gqtc-team.component.css'
  ]
})
export class GqtcTeamComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.controller-tabs-popular').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      nextArrow: '<img src="/assets/media/landingpage/Asset 83.svg" class="nextArrowBtnNews news" style="width: 25px;top:80px">',
      prevArrow: '<img src="/assets/media/landingpage/Asset 84.svg" class="prevArrowBtnNews news" style="width: 25px;top:80px">',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.controller-tabs-popular').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

      if (currentSlide === 7 && nextSlide === 0) {
        var activeEle = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]');
        var dataTarget = $('.controller-tabs-popular div[data-slick-index="' + 1 + '"]').data('target');
      } else {
        if (currentSlide < nextSlide) {
          var activeEle = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]');
          var dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (nextSlide + 1) + '"]').data('target');
        } else {
          var activeEle = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]');
          var dataTarget = $('.controller-tabs-popular div[data-slick-index="' + (currentSlide) + '"]').data('target');
        }
      }


      $('.controller-tabs-popular div').removeClass('active');
      activeEle.addClass('active');

      $('div.tab-pane-business').css('display', 'none');
      $(dataTarget + '.tab-pane-business').css('display', 'flex');
    });
  }
}
