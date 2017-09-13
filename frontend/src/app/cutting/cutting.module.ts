import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootComponent} from './root/root.component';
import {RouterModule, Routes} from '@angular/router';
import {MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule} from '@angular/material';
import {HemComponent} from './dialog/dialog.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfoComponent } from './info/info.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import { BackViewComponent } from './back-view/back-view.component';

const routes: Routes = [
  {path: 'cutting', component: RootComponent},
  {path: 'hem', component: HemComponent},
  {path: 'bk', component: BackViewComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdDialogModule,
    FormsModule,
  ],
  exports: [RootComponent, HemComponent],
  // entryComponents: [DialogComponent],
  declarations: [RootComponent, HemComponent, InfoComponent, BackComponent, FrontComponent, BackViewComponent]
})
export class CuttingModule {
}
