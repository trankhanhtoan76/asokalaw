import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: '[lang-i18n]',
    templateUrl: './lang.component.html',
    styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
    @Input() key: string;
    @Input() default: string;
    langDisplay;
    locale: string;

    constructor(private global: GlobalService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        if (this.key && this.global.langDefined.hasOwnProperty(this.key) && this.global.langDefined[this.key].hasOwnProperty(this.global.locale)) {
            this.langDisplay = this.global.langDefined[this.key][this.global.locale];
        } else {
            this.langDisplay = this.default;
        }
        this.langDisplay = this._sanitizer.bypassSecurityTrustHtml(this.langDisplay);
    }
}
