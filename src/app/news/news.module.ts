import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {RouterModule, Routes} from '@angular/router';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { NewsBoxComponent } from './news-box/news-box.component';
import { NewsForm1Component } from './news-form1/news-form1.component';
import { NewsForm2Component } from './news-form2/news-form2.component';
import { NewsTagComponent } from './news-tag/news-tag.component';
import { NewsBox2Component } from './news-box2/news-box2.component';

const routes: Routes = [
  {path: 'tin-tuc', component: NewsComponent}
];

@NgModule({
  declarations: [
    NewsComponent,
    NewsHeaderComponent,
    NewsBoxComponent,
    NewsForm1Component,
    NewsForm2Component,
    NewsTagComponent,
    NewsBox2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NewsModule {
}
