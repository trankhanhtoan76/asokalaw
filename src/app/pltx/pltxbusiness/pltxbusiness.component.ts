import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
  selector: 'app-pltxbusiness',
  templateUrl: './pltxbusiness.component.html',
  styleUrls: ['./pltxbusiness.component.css']
})
export class PltxbusinessComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.controller-tabs ul li button.btn-tab').click(function() {
      $('.controller-tabs ul li button.btn-tab').each(function(index) {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      const pos = $(this).data('target');
      $('div.tab-pane').each(function(index) {
        $(this).css('display', 'none');
      });
      $(pos + '.tab-pane').css('display', 'flex');
    });
    $('.btn-collapse').click(function() {
      if ($(this).closest('div').find('.active').length !== 0) {
        $(this).removeClass('active');
        $(this).find('i').removeClass('fa-caret-up');
        $(this).find('i').addClass('fa-caret-down');
      } else {
        $(this).addClass('active');
        $(this).find('i').removeClass('fa-caret-down');
        $(this).find('i').addClass('fa-caret-up');
      }
    });
  }
}
