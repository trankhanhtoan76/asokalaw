import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dkdtrecognize',
    templateUrl: './dkdtrecognize.component.html',
    styleUrls: ['./dkdtrecognize.component.css']
})
export class DkdtrecognizeComponent implements OnInit {
    @Output() onclickregister = new EventEmitter();
    @Output() onclickchangepackage = new EventEmitter();

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        const self = this;
        $('.custom-collapse').on('click', function (elem) {
            if ($(this).hasClass('collapsed')) {
                $(this).text(self.global.locale == 'vi' ? 'Thu gọn' : 'Collapsed');
            } else {
                $(this).text(self.global.locale == 'vi' ? 'Chi tiết hạng mục công việc' : 'Task description');
            }
        });
        $('input[name="checkBox"]').on('change', function () {
            const id = $(this).val();
            $('.price-recognize').collapse('hide');
            $($('.price-recognize')[id]).collapse('show');
        });
    }

    changepackage(e, target?): void {
        this.onclickchangepackage.emit(e);
        if (target === 'tab-mcp-V') {
            $('#tab-tldnm-V').addClass('hide-V');
            $('#' + target).removeClass('hide-V');
        } else if (target === 'tab-tldnm-V') {
            $('#tab-mcp-V').addClass('hide-V');
            $('#' + target).removeClass('hide-V');
        }
    }

    // onclick="$('#tab-mcp-V').addClass('hide-V');$('#tab-tldnm-V').toggleClass('hide-V');
    submit(e): void {
        this.onclickregister.emit(e);
    }
}
