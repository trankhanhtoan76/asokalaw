import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-chtg',
  templateUrl: './chtg.component.html',
  styleUrls: ['./chtg.component.css']
})
export class ChtgComponent implements OnInit {

  constructor() {
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
    $('.textTitle').on('click', function() {
      const target = $(this).attr('block');
      if (target === 'two') {
        $('#two').show();
        $('#one').hide();
      } else {
        $('#two').hide();
        $('#one').show();
      }
    });
  }
}
