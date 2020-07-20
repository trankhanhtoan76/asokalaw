import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FooteremailsubcribeComponent} from './footeremailsubcribe/footeremailsubcribe.component';
import {FooterinfoComponent} from './footerinfo/footerinfo.component';
import {HeadermainmenuComponent} from './headermainmenu/headermainmenu.component';
import {ServicemostusedComponent} from './servicemostused/servicemostused.component';
import {HomepricingComponent} from './homepricing/homepricing.component';
import {HomefeedbackComponent} from './homefeedback/homefeedback.component';
import {HometeamsComponent} from './hometeams/hometeams.component';
import {HomeeffectComponent} from './homeeffect/homeeffect.component';
import {CountnumberofusedComponent} from './countnumberofused/countnumberofused.component';
import {HomenewsComponent} from './homenews/homenews.component';
import {HomevideosComponent} from './homevideos/homevideos.component';
import {DkkdComponent} from './dkkd/dkkd/dkkd.component';
import {DkkdbusinesstypeComponent} from './dkkd/dkkdbusinesstype/dkkdbusinesstype.component';
import {DkkdpricingComponent} from './dkkd/dkkdpricing/dkkdpricing.component';
import {DkkdconsultComponent} from './dkkd/dkkdconsult/dkkdconsult.component';
import {Dkkd3stepregistrateComponent} from './dkkd/dkkd3stepregistrate/dkkd3stepregistrate.component';
import {DkkdfeedbackComponent} from './dkkd/dkkdfeedback/dkkdfeedback.component';
import {DkkdsupportComponent} from './dkkd/dkkdsupport/dkkdsupport.component';
import {DkkdquestionComponent} from './dkkd/dkkdquestion/dkkdquestion.component';
import {DknhComponent} from './dknh/dknh/dknh.component';
import {DknhintroComponent} from './dknh/dknhintro/dknhintro.component';
import {DknheffectiveComponent} from './dknh/dknheffective/dknheffective.component';
import {DknheffectivecontentComponent} from './dknh/dknheffectivecontent/dknheffectivecontent.component';
import {DknhpricingComponent} from './dknh/dknhpricing/dknhpricing.component';
import {DknhwhychooseComponent} from './dknh/dknhwhychoose/dknhwhychoose.component';
import {DknhcustomerComponent} from './dknh/dknhcustomer/dknhcustomer.component';
import {DknhfeedbackComponent} from './dknh/dknhfeedback/dknhfeedback.component';
import {DknhquestionComponent} from './dknh/dknhquestion/dknhquestion.component';
import {PartnerComponent} from './home/partner/partner.component';
import {DknhsubfooterComponent} from './dknh/dknhsubfooter/dknhsubfooter.component';
import {DkdtComponent} from './dkdt/dkdt.component';
import {DkdtrecognizeComponent} from './dkdt/dkdtrecognize/dkdtrecognize.component';
import {DkdtreasonComponent} from './dkdt/dkdtreason/dkdtreason.component';
import {DkdtbusinessComponent} from './dkdt/dkdtbusiness/dkdtbusiness.component';
import {DkdtfeedbackComponent} from './dkdt/dkdtfeedback/dkdtfeedback.component';
import {DkdtsupportComponent} from './dkdt/dkdtsupport/dkdtsupport.component';
import {PltxComponent} from './pltx/pltx.component';
import {PltxbusinessComponent} from './pltx/pltxbusiness/pltxbusiness.component';
import {PltxserviceComponent} from './pltx/pltxservice/pltxservice.component';
import {PltxeffectiveComponent} from './pltx/pltxeffective/pltxeffective.component';
import {PltxfeedbackComponent} from './pltx/pltxfeedback/pltxfeedback.component';
import {PltxsupportComponent} from './pltx/pltxsupport/pltxsupport.component';
import {PltxquestionComponent} from './pltx/pltxquestion/pltxquestion.component';
import {PltxvideosComponent} from './pltx/pltxvideos/pltxvideos.component';
import { PltxcontactComponent } from './pltx/pltxcontact/pltxcontact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dang-ky-kinh-doanh', component: DkkdComponent},
  {path: 'dang-ky-nhan-hieu', component: DknhComponent},
  {path: 'dang-ky-dau-tu', component: DkdtComponent},
  {path: 'phap-ly-thuong-xuyen', component: PltxComponent},
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
    DkkdsupportComponent,
    DkkdquestionComponent,
    DknhComponent,
    DknhintroComponent,
    DknheffectiveComponent,
    DknheffectivecontentComponent,
    DknhpricingComponent,
    DknhwhychooseComponent,
    DknhcustomerComponent,
    DknhfeedbackComponent,
    DknhquestionComponent,
    PartnerComponent,
    DknhsubfooterComponent,
    DkdtComponent,
    DkdtrecognizeComponent,
    DkdtreasonComponent,
    DkdtbusinessComponent,
    DkdtfeedbackComponent,
    DkdtsupportComponent,
    PltxComponent,
    PltxbusinessComponent,
    PltxserviceComponent,
    PltxeffectiveComponent,
    PltxfeedbackComponent,
    PltxsupportComponent,
    PltxquestionComponent,
    PltxvideosComponent,
    PltxcontactComponent,
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
