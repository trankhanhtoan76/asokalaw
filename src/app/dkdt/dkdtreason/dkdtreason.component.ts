import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dkdtreason',
  templateUrl: './dkdtreason.component.html',
  styleUrls: ['./dkdtreason.component.css']
})
export class DkdtreasonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 33.svg" class="prevArrowBtnFeedback feedback">',
      prevArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 32.svg" class=" nextArrowBtnFeedback feedback">',
      customPaging: function(slider, i) {
        if (i === 0) {
          return '<b>01</b> 99% khách hàng cũ hài lòng';
        } else if (i === 1) {
          return '<b>02</b> Nhà đầu tư đa dạng, toàn cầu';
        } else {
          return '<b>03</b> Giá phí cạnh tranh, niêm yết rõ ràng';
        }

      },
      focusOnSelect: true
    });
  }
}
