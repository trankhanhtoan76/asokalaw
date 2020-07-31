import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dknh',
    templateUrl: './dknh.component.html',
    styleUrls: ['./dknh.component.css']
})
export class DknhComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    scroll(id: string) {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }
}
