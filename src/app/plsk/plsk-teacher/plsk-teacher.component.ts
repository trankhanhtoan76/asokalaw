import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $:any;
@Component({
  selector: 'app-plsk-teacher',
  templateUrl: './plsk-teacher.component.html',
  styleUrls: [
    '../plsk.component.css',
    './plsk-teacher.component.css']
})
export class PlskTeacherComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }
ngAfterContentInit(): void{
  $('.teacher-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    centerMode: true,
    centerPadding: 50,
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
      }
    ]
  });
}
}
