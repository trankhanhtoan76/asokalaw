import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-plskstudy-content',
  templateUrl: './plskstudy-content.component.html',
  styleUrls: [
    '../plsk.component.css',
    './plskstudy-content.component.css']
})
export class PLSKStudyContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const w = window.innerWidth;
    if (w > 768) {
      $('.study-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 33.svg" class="prevArrowBtnFeedback feedback">',
        prevArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 32.svg" class=" nextArrowBtnFeedback feedback">',
        customPaging: function(slider, i) {
          if (i === 0) {
            return '<b>01.</b> Sự kiện cần xin giấy phép';
          } else if (i === 1) {
            return '<b>02.</b> Thủ tục xin giấy phép';
          } else if (i === 2) {
            return '<b>03.</b> Thủ tục xin giấy phép (tiếp)';
          } else if (i === 3) {
            return '<b>04.</b> Hợp đồng đối tác';
          } else if (i === 4) {
            return '<b>05.</b> Xử lý khủng hoảng';
          } else {
            return '<b>06</b> Tương tác nhóm và trao chứng chỉ';
          }

        },
        focusOnSelect: true
      });
    } else {
      $('.study-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 33.svg" class="prevArrowBtnFeedback feedback">',
        prevArrow: '<img src="/assets/media/DKDT/ly-do-dkdt/Asset 32.svg" class=" nextArrowBtnFeedback feedback">',
        focusOnSelect: true,
      });
    }
  }
}
