import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: HemComponent;
  let fixture: ComponentFixture<HemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
