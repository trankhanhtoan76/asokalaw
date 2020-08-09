import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dknhsubfooter',
    templateUrl: './dknhsubfooter.component.html',
    styleUrls: [
        './dknhsubfooter.component.css',
        './dknhsubfooter-mobile.component.css'
    ]
})
export class DknhsubfooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
