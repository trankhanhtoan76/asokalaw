import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-plskpricing',
    templateUrl: './plskpricing.component.html',
    styleUrls: ['../plsk.component.css', './plskpricing.component.css']
})
export class PLSKPricingComponent implements OnInit {
    @Output() changepackage = new EventEmitter;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    onChangePackage(name) {
        this.changepackage.emit(name);
        $('#plskform1').modal('show');
    }
}
