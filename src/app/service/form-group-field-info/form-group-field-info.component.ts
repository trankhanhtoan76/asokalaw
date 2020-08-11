import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormValidateService} from "../form-validate.service";

@Component({
    selector: 'app-form-group-field-info',
    templateUrl: './form-group-field-info.component.html',
    styleUrls: ['./form-group-field-info.component.css']
})
export class FormGroupFieldInfoComponent implements OnInit {
    @Output() dataName = new EventEmitter;
    @Output() dataEmail = new EventEmitter;
    @Output() dataPhone = new EventEmitter;
    @Input() submitClick:boolean;
    name: string;
    email: string;
    phone: string;
    n: boolean;
    p: boolean;
    e: boolean;

    constructor(public form: FormValidateService) {
    }

    ngOnInit(): void {
    }

}
