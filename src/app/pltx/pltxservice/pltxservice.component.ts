import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-pltxservice',
    templateUrl: './pltxservice.component.html',
    styleUrls: ['./pltxservice.component.css']
})
export class PltxserviceComponent implements OnInit {
    @Output() changepackage = new EventEmitter();

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    onChangePackage(name) {
        this.changepackage.emit(name);
        $('#pltxform1').modal('show');
    }
}
