import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalVideoComponent} from './modal-video/modal-video.component';
import { GlobalQuestionComponent } from './global-question/global-question.component';
import { GlobalFeedbackComponent } from './global-feedback/global-feedback.component';
import { GlobalSlideVideosComponent } from './global-slide-videos/global-slide-videos.component';
import { LangComponent } from './lang/lang.component';
import { GlobalLawyerComponent } from './global-lawyer/global-lawyer.component';


@NgModule({
    declarations: [
        ModalVideoComponent,
        GlobalQuestionComponent,
        GlobalFeedbackComponent,
        GlobalSlideVideosComponent,
        LangComponent,
        GlobalLawyerComponent
    ],
    exports: [
        ModalVideoComponent,
        GlobalQuestionComponent,
        GlobalFeedbackComponent,
        GlobalSlideVideosComponent,
        LangComponent,
        GlobalLawyerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalModule {
}
