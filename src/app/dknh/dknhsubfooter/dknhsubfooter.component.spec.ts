import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhsubfooterComponent } from './dknhsubfooter.component';

describe('DknhsubfooterComponent', () => {
  let component: DknhsubfooterComponent;
  let fixture: ComponentFixture<DknhsubfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhsubfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhsubfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
