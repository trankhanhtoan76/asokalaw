import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dnd3n-question',
  templateUrl: './dnd3n-question.component.html',
  styleUrls: [
    '../dnd3n.component.css',
    './dnd3n-question.component.css'
  ]
})
export class Dnd3nQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }

}
