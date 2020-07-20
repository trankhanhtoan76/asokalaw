import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtComponent } from './dkdt.component';

describe('DkdtComponent', () => {
  let component: DkdtComponent;
  let fixture: ComponentFixture<DkdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
