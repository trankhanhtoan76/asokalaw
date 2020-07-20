import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdpricingComponent } from './dkkdpricing.component';

describe('DkkdpricingComponent', () => {
  let component: DkkdpricingComponent;
  let fixture: ComponentFixture<DkkdpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
