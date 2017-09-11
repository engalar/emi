import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {GarmentPart, LocalGarmentCollar, LocalGarmentFrontBody} from './Components/garment-part-widget.component';
import {GarmentCollar} from './Components/garment-collar-widget.component';
import {GarmentFrontBody} from './Components/garment-front-body-widget.component';
import {SewingWidget} from './Components/sewing-widget.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  exports: [
    GarmentCollar,
    GarmentFrontBody,
    GarmentPart,
    SewingWidget,
    LocalGarmentCollar,
    LocalGarmentFrontBody,
    DemoRoutingModule,
  ],
  declarations: [
    GarmentCollar,
    GarmentFrontBody,
    GarmentPart,
    SewingWidget,
    LocalGarmentCollar,
    LocalGarmentFrontBody,
  ],
  entryComponents: [
    LocalGarmentCollar,
    LocalGarmentFrontBody,
  ]
})
export class DemoModule {
}
