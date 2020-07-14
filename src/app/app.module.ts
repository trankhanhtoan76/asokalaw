import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderbannerComponent } from './headerbanner/headerbanner.component';
import { FooteremailsubcribeComponent } from './footeremailsubcribe/footeremailsubcribe.component';
import { FooterinfoComponent } from './footerinfo/footerinfo.component';
import { HeadermainmenuComponent } from './headermainmenu/headermainmenu.component';
import { ServicemostusedComponent } from './servicemostused/servicemostused.component';
import { HomepricingComponent } from './homepricing/homepricing.component';
import { HomefeedbackComponent } from './homefeedback/homefeedback.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderbannerComponent,
    FooteremailsubcribeComponent,
    FooterinfoComponent,
    HeadermainmenuComponent,
    ServicemostusedComponent,
    HomepricingComponent,
    HomefeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
