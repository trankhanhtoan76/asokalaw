import {Component, Input, OnInit} from '@angular/core';
import {langDefined} from "../../../lang";
import {GlobalService} from "../../service/global.service";

@Component({
    selector: '[lang]',
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

    ngOnInit(): void {
        if (this.key && langDefined.hasOwnProperty(this.key) && langDefined[this.key].hasOwnProperty(this.global.locale)) {
            this.langDisplay = langDefined[this.key][this.global.locale];
        } else {
            this.langDisplay = this.default;
        }
    }
}
