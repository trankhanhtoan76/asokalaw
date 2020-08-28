import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $: any;
@Component({
  selector: 'app-dkdtquestion',
  templateUrl: './dkdtquestion.component.html',
  styleUrls: ['./dkdtquestion.component.css']
})
export class DkdtquestionComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }

}
