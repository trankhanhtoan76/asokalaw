import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdsupportComponent } from './dkkdsupport.component';

describe('DkkdsupportComponent', () => {
  let component: DkkdsupportComponent;
  let fixture: ComponentFixture<DkkdsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
