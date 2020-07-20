import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtsupportComponent } from './dkdtsupport.component';

describe('DkdtsupportComponent', () => {
  let component: DkdtsupportComponent;
  let fixture: ComponentFixture<DkdtsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
