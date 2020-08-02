import {Component, Input, OnInit, Output, SimpleChange, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-tvlsformtvc',
    templateUrl: './tvlsformtvc.component.html',
    styleUrls: ['./tvlsformtvc.component.css']
})
export class TvlsformtvcComponent implements OnInit {
    @Input() show: boolean;
    @Output() isCloseForm2 = new EventEmitter();
    name: string;
    email: string;
    phone: string;
    numberQuestion = 1;
    description: string;
    attachment: string;
    attachmentName: string;
    total: number;

    constructor() {
    }

    ngOnInit(): void {
    }

    showForm(show: boolean) {
        if (show) $('#tvlsform2').modal('show');
        else {
            $('#tvlsform2').modal('hide');
            this.show = false;
            this.isCloseForm2.emit(true);
        }
    }

    submit(): void {

    }

    ngOnChanges(changes: SimpleChange) {
        if (changes.hasOwnProperty('show')) {
            // @ts-ignore
            if (changes.show.currentValue) {
                this.showForm(true);
            } else {
                this.showForm(false);
            }
        }
    }
}
