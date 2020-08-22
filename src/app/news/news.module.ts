import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {RouterModule, Routes} from '@angular/router';
import {NewsHeaderComponent} from './news-header/news-header.component';
import {NewsBoxComponent} from './news-box/news-box.component';
import {NewsForm1Component} from './news-form1/news-form1.component';
import {NewsForm2Component} from './news-form2/news-form2.component';
import {NewsTagComponent} from './news-tag/news-tag.component';
import {NewsBox2Component} from './news-box2/news-box2.component';
import {NewsdetailComponent} from "./newsdetail/newsdetail.component";
import {FormsModule} from "@angular/forms";
import {NewsrecentComponent} from './newsdetail/newsrecent/newsrecent.component';
import {NewsmostviewsComponent} from './newsdetail/newsmostviews/newsmostviews.component';
import {NewsPaginationComponent} from './news-pagination/news-pagination.component';

const routes: Routes = [
    {path: 'danh-muc/:category', component: NewsComponent},
    {path: 'category/:category', component: NewsComponent},
    {path: 'tin-tuc/:post', component: NewsdetailComponent},
    {path: 'news/:post', component: NewsdetailComponent},
    {path: 'tin-tuc', component: NewsComponent},
    {path: 'news', component: NewsComponent},
];

@NgModule({
    declarations: [
        NewsComponent,
        NewsHeaderComponent,
        NewsBoxComponent,
        NewsForm1Component,
        NewsForm2Component,
        NewsTagComponent,
        NewsBox2Component,
        NewsdetailComponent,
        NewsrecentComponent,
        NewsmostviewsComponent,
        NewsPaginationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule
    ]
})
export class NewsModule {
}
