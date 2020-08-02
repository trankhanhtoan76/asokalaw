import {Component, OnInit, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-plskpricing',
    templateUrl: './plskpricing.component.html',
    styleUrls: ['../plsk.component.css', './plskpricing.component.css']
})
export class PLSKPricingComponent implements OnInit {
    @Output() changepackage = new EventEmitter;

    constructor() {
    }

    ngOnInit(): void {
    }

    onChangePackage(name) {
        this.changepackage.emit(name);
        $('#plskform1').modal('show');
    }
}
