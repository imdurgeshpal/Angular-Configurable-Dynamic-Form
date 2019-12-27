import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelControlComponent } from './label-control.component';

describe('LabelControlComponent', () => {
  let component: LabelControlComponent;
  let fixture: ComponentFixture<LabelControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
