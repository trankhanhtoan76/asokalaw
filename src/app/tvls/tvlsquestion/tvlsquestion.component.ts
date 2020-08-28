import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $: any;
@Component({
  selector: 'app-tvlsquestion',
  templateUrl: './tvlsquestion.component.html',
  styleUrls: ['./tvlsquestion.component.css']
})
export class TvlsquestionComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }
}
