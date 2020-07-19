import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { FooteremailsubcribeComponent } from './footeremailsubcribe/footeremailsubcribe.component';
import { FooterinfoComponent } from './footerinfo/footerinfo.component';
import { HeadermainmenuComponent } from './headermainmenu/headermainmenu.component';
import { ServicemostusedComponent } from './servicemostused/servicemostused.component';
import { HomepricingComponent } from './homepricing/homepricing.component';
import { HomefeedbackComponent } from './homefeedback/homefeedback.component';
import { HometeamsComponent } from './hometeams/hometeams.component';
import { HomeeffectComponent } from './homeeffect/homeeffect.component';
import { CountnumberofusedComponent } from './countnumberofused/countnumberofused.component';
import { HomenewsComponent } from './homenews/homenews.component';
import { HomevideosComponent } from './homevideos/homevideos.component';
import { DkkdComponent } from './dkkd/dkkd/dkkd.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dang-ky-kinh-doanh', component: DkkdComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FooteremailsubcribeComponent,
    FooterinfoComponent,
    HeadermainmenuComponent,
    ServicemostusedComponent,
    HomepricingComponent,
    HomefeedbackComponent,
    HometeamsComponent,
    HomeeffectComponent,
    CountnumberofusedComponent,
    HomenewsComponent,
    HomevideosComponent,
    DkkdComponent
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
