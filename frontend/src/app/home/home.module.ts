import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import {MdCardModule} from '@angular/material';

const routes: Routes = [
  {path: 'emi/home', component: SearchComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MdCardModule,
  ],
  declarations: [SearchItemComponent, SearchComponent]
})
export class HomeModule { }
