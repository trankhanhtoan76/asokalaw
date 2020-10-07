import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dnt3nComponent } from './dnt3n.component';
import {RouterModule, Routes} from '@angular/router';
import { Dnt3nRecognizeComponent } from './dnt3n-recognize/dnt3n-recognize.component';
import { Dnt3nReasonComponent } from './dnt3n-reason/dnt3n-reason.component';
import { Dnt3nFeedbackComponent } from './dnt3n-feedback/dnt3n-feedback.component';
import { Dnt3nExcusionComponent } from './dnt3n-excusion/dnt3n-excusion.component';
import { Dnt3nSupportComponent } from './dnt3n-support/dnt3n-support.component';
import { Dnt3nQuestionComponent } from './dnt3n-question/dnt3n-question.component';
import {FormsModule} from "@angular/forms";
import {GlobalModule} from "../global/global.module";
import { Dnt3nForm2Component } from './dnt3n-form2/dnt3n-form2.component';
import { Dnt3nForm3Component } from './dnt3n-form3/dnt3n-form3.component';

const routes: Routes = [
  {path: 'doanh-nghiep-tren-3-nam', component: Dnt3nComponent},
  {path: 'business-over-3-years', component: Dnt3nComponent}
];

@NgModule({
  declarations: [
    Dnt3nComponent,
    Dnt3nRecognizeComponent,
    Dnt3nReasonComponent,
    Dnt3nFeedbackComponent,
    Dnt3nExcusionComponent,
    Dnt3nSupportComponent,
    Dnt3nQuestionComponent,
    Dnt3nForm2Component,
    Dnt3nForm3Component
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GlobalModule
    ]
})
export class Dnt3nModule { }
