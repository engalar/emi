import {Component} from '@angular/core';

import {GarmentPart} from './garment-part-widget.component';
import {GarmentCollar} from './garment-collar-widget.component';
import {GarmentFrontBody} from './garment-front-body-widget.component';

@Component({
  selector: 'sewing-widget',
  template: `
    <div>
      <h3>Sewing</h3>
      <garment-part *ngFor="let part of garmentParts" type="{{part}}"></garment-part>
    </div>
  `,
})
export class SewingWidget {
  public garmentParts: Array<any> = ['collar', 'frontbody']; // load garment parts for this order from service
}
