import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhfeedbackComponent } from './dknhfeedback.component';

describe('DknhfeedbackComponent', () => {
  let component: DknhfeedbackComponent;
  let fixture: ComponentFixture<DknhfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
