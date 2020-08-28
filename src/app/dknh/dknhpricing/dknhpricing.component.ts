import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-dknhpricing',
    templateUrl: './dknhpricing.component.html',
    styleUrls: ['./dknhpricing.component.css']
})
export class DknhpricingComponent implements OnInit {

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
