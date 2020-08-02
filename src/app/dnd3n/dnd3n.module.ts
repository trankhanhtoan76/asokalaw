import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Dnd3nComponent} from './dnd3n.component';
import {RouterModule, Routes} from '@angular/router';
import { Dnd3nMissingComponent } from './dnd3n-missing/dnd3n-missing.component';
import { Dnd3nRecognizeComponent } from './dnd3n-recognize/dnd3n-recognize.component';
import { Dnd3nReasonComponent } from './dnd3n-reason/dnd3n-reason.component';
import { Dnd3nFeedbackComponent } from './dnd3n-feedback/dnd3n-feedback.component';
import { Dnd3nExcusionComponent } from './dnd3n-excusion/dnd3n-excusion.component';
import { Dnd3nSupportComponent } from './dnd3n-support/dnd3n-support.component';
import { Dnd3nQuestionComponent } from './dnd3n-question/dnd3n-question.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'doanh-nghiep-duoi-3-nam', component: Dnd3nComponent}
];

@NgModule({
  declarations: [
    Dnd3nComponent,
    Dnd3nMissingComponent,
    Dnd3nRecognizeComponent,
    Dnd3nReasonComponent,
    Dnd3nFeedbackComponent,
    Dnd3nExcusionComponent,
    Dnd3nSupportComponent,
    Dnd3nQuestionComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule
    ]
})
export class Dnd3nModule {
}
