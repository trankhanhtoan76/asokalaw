import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhpricingComponent } from './dknhpricing.component';

describe('DknhpricingComponent', () => {
  let component: DknhpricingComponent;
  let fixture: ComponentFixture<DknhpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
