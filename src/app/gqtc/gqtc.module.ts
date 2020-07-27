import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GqtcComponent} from './gqtc.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {GqtcRecognizeComponent} from './gqtc-recognize/gqtc-recognize.component';
import { GqtcTeamComponent } from './gqtc-team/gqtc-team.component';
import { GqtcThreeRuleComponent } from './gqtc-three-rule/gqtc-three-rule.component';
import { GqtcSuitableComponent } from './gqtc-suitable/gqtc-suitable.component';
import { GqtcFeedbackComponent } from './gqtc-feedback/gqtc-feedback.component';
import { GqtcReasonComponent } from './gqtc-reason/gqtc-reason.component';
import { GqtcContactComponent } from './gqtc-contact/gqtc-contact.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'giai-quyet-tranh-chap', component: GqtcComponent}
];

@NgModule({
  declarations: [
    GqtcComponent,
    GqtcRecognizeComponent,
    GqtcTeamComponent,
    GqtcThreeRuleComponent,
    GqtcSuitableComponent,
    GqtcFeedbackComponent,
    GqtcReasonComponent,
    GqtcContactComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
    ]
})
export class GqtcModule {
}
