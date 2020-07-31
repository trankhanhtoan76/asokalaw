import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SpinnerService} from "./service/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private spinner: SpinnerService) {
      const self = this;
      self.spinner.show('Loading');
      // tslint:disable-next-line:only-arrow-functions
      window.onload = function() {
          self.spinner.hide();
      };
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
