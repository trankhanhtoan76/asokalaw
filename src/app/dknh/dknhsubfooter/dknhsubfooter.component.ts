import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-dknhsubfooter',
    templateUrl: './dknhsubfooter.component.html',
    styleUrls: [
        './dknhsubfooter.component.css',
        './dknhsubfooter-mobile.component.css'
    ]
})
export class DknhsubfooterComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
