import {Component, HostListener, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

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

    constructor(private global: GlobalService) {
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
}
