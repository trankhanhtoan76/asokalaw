import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChnnComponent } from './chnn.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {GlobalModule} from "../global/global.module";

const routes: Routes = [
  {path: 'co-hoi-nghe-nghiep', component: ChnnComponent},
  {path: 'careers', component: ChnnComponent}
];

@NgModule({
  declarations: [
    ChnnComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        GlobalModule
    ]
})
export class ChnnModule { }
