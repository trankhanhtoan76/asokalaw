import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dkkdconsult',
    templateUrl: './dkkdconsult.component.html',
    styleUrls: ['./dkkdconsult.component.css']
})
export class DkkdconsultComponent implements OnInit {
    @Output() consultEvent = new EventEmitter();
    consult;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    submit(): void {
        this.consultEvent.emit(this.consult);
    }
}
