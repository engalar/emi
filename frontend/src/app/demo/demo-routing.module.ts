import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SewingWidget} from './Components/sewing-widget.component';

const routes: Routes = [{path: 'demo', component: SewingWidget}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
