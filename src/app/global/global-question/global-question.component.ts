import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-global-question',
    templateUrl: './global-question.component.html',
    styleUrls: ['./global-question.component.css']
})
export class GlobalQuestionComponent implements OnInit {
    @Input() contentsleft;
    @Input() contentsright;
    hadInit: boolean;

    constructor(private _sanitizer: DomSanitizer, public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    nl2br(string: string): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(string.replace(/\n/g, '<br/>'));
    }

    str2id(s: string): string {
        return s.replace(/[^A-Za-z0-9]/g, '') + s.length;
    }

    ngAfterViewChecked(): void {
        if (!this.hadInit) {
            this.hadInit = true;
            $('.s6head').click(function (e) {
                e.preventDefault();
                $(this).parents("li").find(".s6body").slideToggle();
            });
        }
    }
}
