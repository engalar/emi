import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { WorkSpaceItemComponent } from './work-space-item/work-space-item.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'emi/home', component: HomeViewComponent},

  {path: '', redirectTo: 'emi/home', pathMatch: 'full'},
  {path: 'emi', redirectTo: 'emi/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [HomeViewComponent, MenuComponent, MenuItemComponent, WorkSpaceComponent, WorkSpaceItemComponent]
})
export class HomeModule { }
