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

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    let t = document.documentElement.scrollTop;
    if (t >= 400) {
      this.fixedTop = 'fixed-top';
      this.styleBorderBottomMainMenu = 'border-bottom:solid 1px #acacac';
    } else {
      this.fixedTop = '';
      this.styleBorderBottomMainMenu = '';
    }
  }
}
