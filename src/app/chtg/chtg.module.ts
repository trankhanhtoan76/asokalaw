import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChtgComponent } from './chtg.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'cau-hoi-thuong-gap', component: ChtgComponent}
];

@NgModule({
  declarations: [
    ChtgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ChtgModule { }
