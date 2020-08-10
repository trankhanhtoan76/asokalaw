import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalVideoComponent} from './modal-video/modal-video.component';
import { GlobalQuestionComponent } from './global-question/global-question.component';
import { GlobalFeedbackComponent } from './global-feedback/global-feedback.component';
import { GlobalSlideVideosComponent } from './global-slide-videos/global-slide-videos.component';


@NgModule({
    declarations: [
        ModalVideoComponent,
        GlobalQuestionComponent,
        GlobalFeedbackComponent,
        GlobalSlideVideosComponent
    ],
    exports: [
        ModalVideoComponent,
        GlobalQuestionComponent,
        GlobalFeedbackComponent,
        GlobalSlideVideosComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalModule {
}
