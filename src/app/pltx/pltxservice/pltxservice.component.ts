import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-pltxservice',
    templateUrl: './pltxservice.component.html',
    styleUrls: ['./pltxservice.component.css']
})
export class PltxserviceComponent implements OnInit {
    @Output() changepackage = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    onChangePackage(name) {
        this.changepackage.emit(name);
        $('#pltxform1').modal('show');
    }
}
