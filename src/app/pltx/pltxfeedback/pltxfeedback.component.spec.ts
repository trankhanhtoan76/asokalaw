import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PltxfeedbackComponent } from './pltxfeedback.component';

describe('PltxfeedbackComponent', () => {
  let component: PltxfeedbackComponent;
  let fixture: ComponentFixture<PltxfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PltxfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PltxfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
