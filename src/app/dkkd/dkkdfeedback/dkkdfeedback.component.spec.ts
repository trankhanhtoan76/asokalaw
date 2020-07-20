import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdfeedbackComponent } from './dkkdfeedback.component';

describe('DkkdfeedbackComponent', () => {
  let component: DkkdfeedbackComponent;
  let fixture: ComponentFixture<DkkdfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
