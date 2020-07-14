import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-headermainmenu',
  templateUrl: './headermainmenu.component.html',
  styleUrls: ['./headermainmenu.component.css']
})
export class HeadermainmenuComponent implements OnInit {

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
      this.styleBorderBottomMainMenu = 'border-bottom:solid 1px #acacac';
    } else {
      this.styleBorderBottomMainMenu = '';
    }
  }

}
