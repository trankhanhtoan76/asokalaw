import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";
declare var $: any;
@Component({
  selector: 'app-pltxquestion',
  templateUrl: './pltxquestion.component.html',
  styleUrls: ['./pltxquestion.component.css']
})
export class PltxquestionComponent implements OnInit {
  //OK
  constructor(public global: GlobalService) { }
  // <Change>
  ngOnInit(): void {
    $('.s6head').click(function (e) {
      e.preventDefault();
      $(this).parents("li").find(".s6body").slideToggle();
    });
  }
  // </Change>

}
