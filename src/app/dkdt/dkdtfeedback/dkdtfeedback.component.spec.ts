import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtfeedbackComponent } from './dkdtfeedback.component';

describe('DkdtfeedbackComponent', () => {
  let component: DkdtfeedbackComponent;
  let fixture: ComponentFixture<DkdtfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
