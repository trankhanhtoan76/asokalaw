import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknheffectiveComponent } from './dknheffective.component';

describe('DknheffectiveComponent', () => {
  let component: DknheffectiveComponent;
  let fixture: ComponentFixture<DknheffectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknheffectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknheffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
