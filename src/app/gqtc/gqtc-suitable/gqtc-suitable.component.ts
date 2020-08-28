import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-gqtc-suitable',
    templateUrl: './gqtc-suitable.component.html',
    styleUrls: [
        '../gqtc.component.css',
        './gqtc-suitable.component.css'
    ]
})
export class GqtcSuitableComponent implements OnInit {
    @Output() changepackage = new EventEmitter;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    onChangePackage(name) {
        this.changepackage.emit(name);
        $('#gqtcform1').modal('show');
    }
}
