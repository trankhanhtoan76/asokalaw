import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-dknheffective',
    templateUrl: './dknheffective.component.html',
    styleUrls: ['./dknheffective.component.css']
})
export class DknheffectiveComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
