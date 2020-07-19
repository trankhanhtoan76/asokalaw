import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  fixedTop = '';
  styleBorderBottomMainMenu = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  isMobileScreen(): boolean {
    return window.screen.width < 768;
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    if (document.documentElement.scrollTop >= 400) {
      this.fixedTop = 'fixed-top';
      this.styleBorderBottomMainMenu = 'border-bottom:solid 1px #acacac';
    } else {
      this.fixedTop = '';
      this.styleBorderBottomMainMenu = '';
    }
  }
}
