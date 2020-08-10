import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalVideoComponent} from './modal-video/modal-video.component';
import { GlobalQuestionComponent } from './global-question/global-question.component';


@NgModule({
    declarations: [
        ModalVideoComponent,
        GlobalQuestionComponent
    ],
    exports: [
        ModalVideoComponent,
        GlobalQuestionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalModule {
}
