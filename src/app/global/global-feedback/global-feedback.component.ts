import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-global-feedback',
    templateUrl: './global-feedback.component.html',
    styleUrls: ['./global-feedback.component.css']
})
export class GlobalFeedbackComponent implements OnInit {
    @Input() datacontent;
    @Input() dataid;
    @Input() datatitle;
    hadInit: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        if (!this.hadInit && this.datacontent.length > 0) {
            var self = this;
            this.hadInit = true;
            $('#' + this.dataid).slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                nextArrow: false,
                prevArrow: false,
                focusOnSelect: true,
                customPaging: function (slider, i) {
                    return '<span class="dots-img"><img src="' + self.datacontent[i].img + '" style="max-width: 100%"/></span>';
                },
            });
        }
    }
}
