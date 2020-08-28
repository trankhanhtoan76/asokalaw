import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {GlobalModule} from "../global/global.module";

const routes: Routes = [
  {path: 'lien-he', component: ContactComponent}
];

@NgModule({
  declarations: [ContactComponent],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GlobalModule
    ]
})
export class ContactModule {
}
