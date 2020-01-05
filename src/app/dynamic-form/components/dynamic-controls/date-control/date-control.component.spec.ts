import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateControlComponent } from './date-control.component';

describe('DateControlComponent', () => {
  let component: DateControlComponent;
  let fixture: ComponentFixture<DateControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
