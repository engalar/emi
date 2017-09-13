import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackViewComponent } from './back-view.component';

describe('BackViewComponent', () => {
  let component: BackViewComponent;
  let fixture: ComponentFixture<BackViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
