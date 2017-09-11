import {Component} from '@angular/core';
import {GarmentPart} from './garment-part-widget.component';

@Component({
  selector: 'garment-collar-widget',
  template: `
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1000px" height="630px" viewBox="0 0 1000 1052.4" style="enable-background:new 0 0 1000 1052.4;" xml:space="preserve">
        <g>
          <g transform="translate(433.0977,664.7261)">
            <path d="M110-442.8c4.3,13.1,8.6,26.3,13,39.4
              c-1.8,2.6-4.3,6.5-7.2,11.5c-3.7,6.3-4.9,9.2-6.9,12.8c-4.2,7.6-8.4,12.2-16.6,21.1c-4.4,4.7-10.3,10.7-17.9,17.2
              C67.3-357,60.2-373.2,53-389.4c25.8-22.4,46.7-38.3,54.1-47.4c1.3-1.6,2.2-3,2.6-4.4C113-452.5,86-455.8,86-455.8l-52.9-0.7
              c-37.9-2.6-37.5,17-37.5,17c10,17.8,56.6,50,56.6,50c-7,15.1-14.1,30.2-21.1,45.2C23.8-350,15.4-357.8,7-368
              c-11.3-13.8-18.4-27.3-22.9-37.7c3.9-11.8,7.7-23.6,11.6-35.4"/>
          </g>
        </g>
      </svg>
    </div>
  `,
})
export class GarmentCollar extends GarmentPart {
}