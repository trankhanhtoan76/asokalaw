import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
  selector: 'app-tnsm',
  templateUrl: './tnsm.component.html',
  styleUrls: ['./tnsm.component.css']
})
export class TnsmComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.mission-slider').slick({
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
          return '<b style="font-size:1.5rem">01</b> Cung cấp dịch vụ tiện ích';
        } else if (i === 1) {
          return '<b style="font-size:1.5rem">02</b> Dự toán ngân sách rõ ràng';
        } else {
          return '<b style="font-size:1.5rem">03</b> Phục vụ thân chủ tận tâm';
        }
      },
      focusOnSelect: true
    });
  }
}
