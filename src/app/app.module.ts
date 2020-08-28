import {BrowserModule, Meta, Title} from '@angular/platform-browser';
import {PlskModule} from './plsk/plsk.module';
import {NgModule} from '@angular/core';
import {GqtcModule} from './gqtc/gqtc.module';

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
import {PltxcontactComponent} from './pltx/pltxcontact/pltxcontact.component';
import {TvlsComponent} from './tvls/tvls.component';
import {TvlslawyerComponent} from './tvls/tvlslawyer/tvlslawyer.component';
import {TvlsserviceComponent} from './tvls/tvlsservice/tvlsservice.component';
import {TvlseffectiveComponent} from './tvls/tvlseffective/tvlseffective.component';
import {TvlsteamComponent} from './tvls/tvlsteam/tvlsteam.component';
import {TvlsconsultComponent} from './tvls/tvlsconsult/tvlsconsult.component';
import {TvlssupportComponent} from './tvls/tvlssupport/tvlssupport.component';
import {TvlsfeedbackComponent} from './tvls/tvlsfeedback/tvlsfeedback.component';
import {TvlsmostviewComponent} from './tvls/tvlsmostview/tvlsmostview.component';
import {TvlscontactComponent} from './tvls/tvlscontact/tvlscontact.component';
import {FormsModule} from '@angular/forms';
import {Dnd3nModule} from './dnd3n/dnd3n.module';
import {Dnt3nModule} from './dnt3n/dnt3n.module';
import {ContactModule} from './contact/contact.module';
import {ChtgModule} from './chtg/chtg.module';
import {ChnnModule} from './chnn/chnn.module';
import {QtlvModule} from './qtlv/qtlv.module';
import {TnsmModule} from './tnsm/tnsm.module';
import {NewsModule} from './news/news.module';
import {KtdnModule} from "./ktdn/ktdn.module";
import { TvlsformtvcComponent } from './tvls/tvlsformtvc/tvlsformtvc.component';
import { Tvlsform3Component } from './tvls/tvlsform3/tvlsform3.component';
import { Tvlsform4Component } from './tvls/tvlsform4/tvlsform4.component';
import { TvlsdialogconfirmComponent } from './tvls/tvlsdialogconfirm/tvlsdialogconfirm.component';
import {FormValidateService} from "./service/form-validate.service";
import {EmailService} from "./service/email.service";
import { FormFieldUploadComponent } from './service/form-field-upload/form-field-upload.component';
import { FormGroupFieldInfoComponent } from './service/form-group-field-info/form-group-field-info.component';
import {GlobalModule} from "./global/global.module";
import { DknhVideosComponent } from './dknh/dknh-videos/dknh-videos.component';
import { DkkdSubfooterComponent } from './dkkd/dkkd-subfooter/dkkd-subfooter.component';
import {GlobalService} from "./service/global.service";
import { TvlsquestionComponent } from './tvls/tvlsquestion/tvlsquestion.component';
import { DkdtquestionComponent } from './dkdt/dkdtquestion/dkdtquestion.component';
import {NewsdetailComponent} from "./news/newsdetail/newsdetail.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dang-ky-kinh-doanh', component: DkkdComponent},
    {path: 'dang-ky-nhan-hieu', component: DknhComponent},
    {path: 'dang-ky-dau-tu', component: DkdtComponent},
    {path: 'phap-ly-thuong-xuyen', component: PltxComponent},
    {path: 'tu-van-luat-su', component: TvlsComponent},
    {path: '**', component: NewsdetailComponent},
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
        TvlsComponent,
        TvlslawyerComponent,
        TvlsserviceComponent,
        TvlseffectiveComponent,
        TvlsteamComponent,
        TvlsconsultComponent,
        TvlssupportComponent,
        TvlsfeedbackComponent,
        TvlsmostviewComponent,
        TvlscontactComponent,
        TvlsformtvcComponent,
        Tvlsform3Component,
        Tvlsform4Component,
        TvlsdialogconfirmComponent,
        FormFieldUploadComponent,
        FormGroupFieldInfoComponent,
        DknhVideosComponent,
        DkkdSubfooterComponent,
        TvlsquestionComponent,
        DkdtquestionComponent
    ],
    imports: [
        BrowserModule,
        PlskModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GqtcModule,
        Dnd3nModule,
        Dnt3nModule,
        ContactModule,
        ChtgModule,
        ChnnModule,
        QtlvModule,
        TnsmModule,
        NewsModule,
        KtdnModule,
        GlobalModule
    ],
    providers: [
        FormValidateService,
        EmailService,
        GlobalService,
        Title,
        Meta
    ],
    exports: [
        DkkdquestionComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
