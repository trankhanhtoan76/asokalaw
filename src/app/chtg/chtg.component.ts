import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

declare var $: any;

@Component({
  selector: 'app-chtg',
  templateUrl: './chtg.component.html',
  styleUrls: ['./chtg.component.css']
})
export class ChtgComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.textboder p a').on('click', function() {
      const target = $(this).attr('data-target');
      $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top - 150
      }, 200);
    });
    $('.tables1 .textTitle').on('click', function() {
      const _this = $(this);
      if (!_this.hasClass('actived')) {
        $('.tables1 .textTitle').removeClass('actived');
        _this.addClass('actived');
        $('.tables2').hide();
        $('#' + _this.attr('block')).show();
      }
    });
  }
}
