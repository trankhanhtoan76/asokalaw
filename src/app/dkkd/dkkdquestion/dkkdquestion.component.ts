import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dkkdquestion',
  templateUrl: './dkkdquestion.component.html',
  styleUrls: ['./dkkdquestion.component.css']
})
export class DkkdquestionComponent implements OnInit {
//OK
  constructor() { }
  // <Change>
  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }
  // </Change>

}
