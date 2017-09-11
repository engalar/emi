import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import {GarmentCollar} from './garment-collar-widget.component';
import {GarmentFrontBody} from './garment-front-body-widget.component';

@Component({
  selector: 'garment-part',
  template: `
    <div>
      <div #container></div>
    </div>
  `
})
export class GarmentPart implements OnInit, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  context: any;

  private mappings = {
    // 'collar': GarmentCollar,
    // 'frontbody': GarmentFrontBody,
    'collar': LocalGarmentCollar,
    'frontbody': LocalGarmentFrontBody,
  };

  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    return this.mappings[typeName];
  }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);

      // note: componentType must be declared within module.entryComponents
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      const instance = <GarmentPart> this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

@Component({
  selector: 'local-garment-collar-widget',
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
export class LocalGarmentCollar extends GarmentPart {
}

@Component({
  selector: 'local-garment-front-body-widget',
  template: `
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1000px" height="630px" viewBox="0 0 1000 1052.4" style="enable-background:new 0 0 1000 1052.4;" xml:space="preserve">
        <g>
          <path d="M438.2,347.8"/>
          <path d="M334.6,331.6c33.7-14.4,67.4-28.9,101-43.3c4.3,7,10.7,15.6,19.8,24.1c6.2,5.8,12.3,10.3,17.6,13.7
            c0.6,72.2,0.9,144.4,1,216.7c0.1,82.8-0.1,165.5-0.6,248.3c-50.8-5.5-75-12.1-87.4-17.6c-2.5-1.1-13.6-6.2-29.3-11.3
            c-8.1-2.6-15.2-4.6-20.9-6c-0.1-2.8-0.1-6.4,0-10.7c0.1-2.6,0.2-4.9,0.4-9.4c0.6-12.8,1.1-17.7,2.1-23c0,0,0,0,0,0
            c16.3-6.7,21.8-11,21.8-11c3-2.3,6.9-6.1,12.7-16.6c11.5-20.9,15.5-41.1,17.1-51.6c1-6.7,1.5-16.8,2.5-37.1
            c0.8-15.7,1.4-29.3,0.8-47.3c-0.4-14.8-1.4-25.5-1.8-28.9c-1.5-14.9-2.2-23-5-34c-3.4-13.5-7.6-23.2-11.4-32
            c-2.3-5.4-4.7-10.9-8.7-18c-4.8-8.4-7.9-14-13.6-20c-5.5-5.8-8.4-7.1-10.8-10c-0.7-0.8-2.3-3.6-1.7-2.7c0,0-2.2-22.6-3.8-44
            C335.8,353.2,335.2,343.5,334.6,331.6z"/>
          <path d="M541.6,285.1c32.1,14.8,64.3,29.6,96.4,44.4c0.1,5.6,0.1,14.6-0.3,25.7c-0.9,23.1-2.9,32.4-3.4,50.5
            c-0.2,8.3-0.1,20.8,1.5,36.1c-4.3,22-7.2,40.7-9.1,55c-6.1,45.9-0.9,34.3-4.5,61.6c-0.5,4.1-1.8,13.3,1.7,23.9
            c1.7,5.1,3.6,6.1,5.3,9.2c0.3,0.5,1.1,2,1.7,4.2c0.4,1.3,1,4,0.7,7.3c-0.3,3.4-1.4,5.9-2,7.2c-1.5,3.4-3.6,8.7-5.8,17.1
            c-0.9,2.9-2,6.8-3.2,11.3c-1,3.6-1.8,6.8-2.7,10.5c-2.3,9.1-3.9,15.9-4.5,18.6c-4,16.8-5.5,19-6.5,23c-0.6,2.2-0.8,4-0.9,4.8
            c-1,7.5-1.3,13-2.4,20.6c-1.6,11.4-2.1,6.3-2.6,11.7c-0.1,1.3-0.3,3.3-1.7,4.2c-1.7,1.1-3.6-0.7-5.2,0.3c-1.4,0.9-0.8,2.8-1.5,7
            c-0.3,1.9-1,4-2.3,8.2c-1.3,4.1-2.5,7-2.8,7.8c-1.5,3.9-3.8,10.9-7,24.7c-6.9,3-14.8,5.8-23.5,8.2c-23.6,6.3-44.7,6.6-60.3,5.3
            c0-0.1,0-1.8,0-1.9c0.2-12.5,0.4-103.7,1.6-204c0.7-59.9,1-146-1.3-256c6.7-4.8,14.2-10.9,21.9-18.5
            C528.7,303.1,536.1,293.4,541.6,285.1z"/>
          <path d="M668.5,705.5"/>
        </g>
      </svg>
    </div>
  `,
})
export class LocalGarmentFrontBody extends GarmentPart {
}
