import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalVideoComponent} from './modal-video/modal-video.component';


@NgModule({
    declarations: [
        ModalVideoComponent
    ],
    exports: [
        ModalVideoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalModule {
}
