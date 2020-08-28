import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QtlvComponent} from './qtlv.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {GlobalModule} from "../global/global.module";

const routes: Routes = [
  {path: 'quy-trinh-lam-viec', component: QtlvComponent}
];

@NgModule({
  declarations: [QtlvComponent],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GlobalModule
    ]
})
export class QtlvModule {
}
