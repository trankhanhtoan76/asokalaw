import {Component, OnInit, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dkdtrecognize',
    templateUrl: './dkdtrecognize.component.html',
    styleUrls: ['./dkdtrecognize.component.css']
})
export class DkdtrecognizeComponent implements OnInit {
    @Output() onclickregister = new EventEmitter();
    @Output() onclickchangepackage = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        $('.custom-collapse').on('click', function (elem) {
            if ($(this).hasClass('collapsed')) {
                $(this).text('Thu gọn');
            } else {
                $(this).text('Chi tiết hạng mục công việc');
            }
        });
        $('input[name="checkBox"]').on('change', function () {
            const id = $(this).val();
            $('.price-recognize').collapse('hide');
            $($('.price-recognize')[id]).collapse('show');
        });
    }

    changepackage(e): void {
        this.onclickchangepackage.emit(e);
    }

    submit(e): void {
        this.onclickregister.emit(e);
    }
}
