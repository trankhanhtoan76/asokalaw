import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChnnComponent } from './chnn.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'co-hoi-nghe-nghiep', component: ChnnComponent}
];

@NgModule({
  declarations: [
    ChnnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ChnnModule { }
