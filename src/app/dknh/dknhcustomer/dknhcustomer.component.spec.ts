import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhcustomerComponent } from './dknhcustomer.component';

describe('DknhcustomerComponent', () => {
  let component: DknhcustomerComponent;
  let fixture: ComponentFixture<DknhcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
