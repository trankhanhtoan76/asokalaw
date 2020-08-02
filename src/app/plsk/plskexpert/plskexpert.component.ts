import {Component, OnInit, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-plskexpert',
    templateUrl: './plskexpert.component.html',
    styleUrls: ['../plsk.component.css', './plskexpert.component.css']
})
export class PLSKExpertComponent implements OnInit {
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
