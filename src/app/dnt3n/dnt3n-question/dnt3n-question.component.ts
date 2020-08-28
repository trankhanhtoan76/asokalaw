import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $: any;
@Component({
  selector: 'app-dnt3n-question',
  templateUrl: './dnt3n-question.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-question.component.css'
  ]
})
export class Dnt3nQuestionComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }

}
