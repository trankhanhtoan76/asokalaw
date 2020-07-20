import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtrecognizeComponent } from './dkdtrecognize.component';

describe('DkdtrecognizeComponent', () => {
  let component: DkdtrecognizeComponent;
  let fixture: ComponentFixture<DkdtrecognizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtrecognizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtrecognizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
