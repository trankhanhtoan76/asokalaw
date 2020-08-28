import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SpinnerService} from "./service/spinner.service";
import {Meta, Title} from "@angular/platform-browser";
import {GlobalService} from "./service/global.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private spinner: SpinnerService, private _title: Title, private _meta: Meta,public global: GlobalService) {
        this.spinner.hide();
    }

    ngOnInit(): void {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
