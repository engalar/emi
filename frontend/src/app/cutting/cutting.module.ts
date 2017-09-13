import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootComponent} from './root/root.component';
import {RouterModule, Routes} from '@angular/router';
import {MdButtonModule, MdCardModule, MdGridListModule} from '@angular/material';



const routes: Routes = [{path: 'cutting', component: RootComponent}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
  ],
  exports: [RootComponent],
  declarations: [RootComponent]
})
export class CuttingModule {
}
