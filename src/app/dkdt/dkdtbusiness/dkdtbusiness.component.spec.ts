import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtbusinessComponent } from './dkdtbusiness.component';

describe('DkdtbusinessComponent', () => {
  let component: DkdtbusinessComponent;
  let fixture: ComponentFixture<DkdtbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
