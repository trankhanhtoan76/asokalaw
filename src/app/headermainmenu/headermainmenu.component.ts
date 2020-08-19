import {Component, HostListener, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";
import {Router, RouterModule} from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-headermainmenu',
    templateUrl: './headermainmenu.component.html',
    styleUrls: ['./headermainmenu.component.css']
})
export class HeadermainmenuComponent implements OnInit {

    styleBorderBottomMainMenu = '';
    showMenu1 = false;
    showMenu2 = false;
    showMenu3 = false;
    showMenu4 = false;
    showMenu5 = false;

    constructor(public global: GlobalService, private router: Router) {
    }

    ngOnInit(): void {
    }

    @HostListener('window:scroll', ['$event'])
    // tslint:disable-next-line:typedef
    onWindowScroll() {
        const t = document.documentElement.scrollTop;
        if (t >= 400) {
            this.styleBorderBottomMainMenu = 'border-bottom:solid 1px #acacac';
        } else {
            this.styleBorderBottomMainMenu = '';
        }
    }

    collapseMenu() {
        $('#collapsibleNavbar').collapse('hide')
    }

    navigateTo(e) {
        this.router.navigate([e]);
    }
}
