import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dknhpricing',
    templateUrl: './dknhpricing.component.html',
    styleUrls: ['./dknhpricing.component.css']
})
export class DknhpricingComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
