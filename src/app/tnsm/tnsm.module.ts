import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TnsmComponent} from './tnsm.component';
import {RouterModule, Routes} from '@angular/router';
import {GlobalModule} from "../global/global.module";

const routes: Routes = [
  {path: 'tam-nhin-su-menh', component: TnsmComponent}
];

@NgModule({
  declarations: [TnsmComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
      GlobalModule
  ]
})
export class TnsmModule {
}
