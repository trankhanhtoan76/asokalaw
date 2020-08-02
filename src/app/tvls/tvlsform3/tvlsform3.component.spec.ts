import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tvlsform3Component } from './tvlsform3.component';

describe('Tvlsform3Component', () => {
  let component: Tvlsform3Component;
  let fixture: ComponentFixture<Tvlsform3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tvlsform3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tvlsform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
