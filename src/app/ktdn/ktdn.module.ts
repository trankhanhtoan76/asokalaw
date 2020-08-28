import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KtdnComponent} from './ktdn.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import { KtdnFeedbackComponent } from './ktdn-feedback/ktdn-feedback.component';
import {GlobalModule} from "../global/global.module";

const routes: Routes = [
    {path: 'khoi-tao-doanh-nghiep', component: KtdnComponent}
];

@NgModule({
    declarations: [
        KtdnComponent,
        KtdnFeedbackComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GlobalModule
    ]
})
export class KtdnModule {
}
