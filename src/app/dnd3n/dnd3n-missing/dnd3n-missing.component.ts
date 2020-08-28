import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dnd3n-missing',
    templateUrl: './dnd3n-missing.component.html',
    styleUrls: [
        '../dnd3n.component.css',
        './dnd3n-missing.component.css']
})
export class Dnd3nMissingComponent implements OnInit {
    @Output() onselectservice = new EventEmitter;
    s1 = 'Quản trị 4 trong 1: pháp lý - thuế - hợp đồng - lao động';
    s2 = 'Đăng ký giấy phép ngành nghề có điều kiện';
    s3 = 'Đăng ký nhãn hiệu';
    s4 = 'Khác';
    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    selectService(value) {
        this.onselectservice.emit((value));
        $('#dnd3nform1').modal('show');
    }

}
