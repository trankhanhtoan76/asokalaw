import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dkkdpricing',
    templateUrl: './dkkdpricing.component.html',
    styleUrls: ['./dkkdpricing.component.css']
})
export class DkkdpricingComponent implements OnInit {
    @Output() package = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    submit(p): void {
        this.package.emit(p);
    }
}
