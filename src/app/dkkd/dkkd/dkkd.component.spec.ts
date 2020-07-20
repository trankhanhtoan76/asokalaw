import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdComponent } from './dkkd.component';

describe('DkkdComponent', () => {
  let component: DkkdComponent;
  let fixture: ComponentFixture<DkkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
