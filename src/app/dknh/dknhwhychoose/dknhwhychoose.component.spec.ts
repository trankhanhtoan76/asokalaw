import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhwhychooseComponent } from './dknhwhychoose.component';

describe('DknhwhychooseComponent', () => {
  let component: DknhwhychooseComponent;
  let fixture: ComponentFixture<DknhwhychooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhwhychooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhwhychooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
