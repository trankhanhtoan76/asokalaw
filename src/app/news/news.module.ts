import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'tin-tuc', component: NewsComponent}
];

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NewsModule {
}
