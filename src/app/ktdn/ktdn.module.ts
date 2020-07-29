import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KtdnComponent} from './ktdn.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'khoi-tao-doanh-nghiep', component: KtdnComponent}
];

@NgModule({
    declarations: [
        KtdnComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class KtdnModule {
}
