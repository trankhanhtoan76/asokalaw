import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: '[lang-i18n]',
    templateUrl: './lang.component.html',
    styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
    @Input() key: string;
    @Input() default: string;
    langDisplay: string;
    locale: string;

    constructor(private global: GlobalService) {
    }

    ngOnInit(): void {debugger;
        if (this.key && this.global.langDefined.hasOwnProperty(this.key) && this.global.langDefined[this.key].hasOwnProperty(this.global.locale)) {
            this.langDisplay = this.global.langDefined[this.key][this.global.locale];
        } else {
            this.langDisplay = this.default;
        }
    }
}
