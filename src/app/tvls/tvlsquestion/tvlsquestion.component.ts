import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tvlsquestion',
  templateUrl: './tvlsquestion.component.html',
  styleUrls: ['./tvlsquestion.component.css']
})
export class TvlsquestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }
}
