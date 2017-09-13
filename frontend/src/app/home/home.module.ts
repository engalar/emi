import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: 'emi/home/cutting', component: RootComponent},
  // {path: 'emi/home/hem', component: HemComponent},
  // {path: 'emi/home/bk', component: BackViewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class HomeModule { }
