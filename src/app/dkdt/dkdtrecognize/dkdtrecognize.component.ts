import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dkdtrecognize',
  templateUrl: './dkdtrecognize.component.html',
  styleUrls: ['./dkdtrecognize.component.css']
})
export class DkdtrecognizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    $('.custom-collapse').on('click', function(elem) {
      if ($(this).hasClass('collapsed')) {
        $(this).text('Thu gọn');
      } else {
        $(this).text('Chi tiết hạng mục công việc');
      }
    });
  }
}
