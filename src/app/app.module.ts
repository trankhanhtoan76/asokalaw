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
import { DkkdbusinesstypeComponent } from './dkkd/dkkdbusinesstype/dkkdbusinesstype.component';
import { DkkdpricingComponent } from './dkkd/dkkdpricing/dkkdpricing.component';
import { DkkdconsultComponent } from './dkkd/dkkdconsult/dkkdconsult.component';
import { Dkkd3stepregistrateComponent } from './dkkd/dkkd3stepregistrate/dkkd3stepregistrate.component';
import { DkkdfeedbackComponent } from './dkkd/dkkdfeedback/dkkdfeedback.component';
import { DkkdsupportComponent } from './dkkd/dkkdsupport/dkkdsupport.component';

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
    DkkdComponent,
    DkkdbusinesstypeComponent,
    DkkdpricingComponent,
    DkkdconsultComponent,
    Dkkd3stepregistrateComponent,
    DkkdfeedbackComponent,
    DkkdsupportComponent
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
