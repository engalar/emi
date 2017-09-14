import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceItemComponent } from './work-space-item.component';

describe('WorkSpaceItemComponent', () => {
  let component: WorkSpaceItemComponent;
  let fixture: ComponentFixture<WorkSpaceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSpaceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
