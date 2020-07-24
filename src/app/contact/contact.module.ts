import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'lien-he', component: ContactComponent}
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ContactModule {
}
