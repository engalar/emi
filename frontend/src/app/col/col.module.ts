import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: 'emi/col/cutting', component: RootComponent},
  // {path: 'emi/col/hem', component: HemComponent},
  // {path: 'emi/col/bk', component: BackViewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class ColModule { }
