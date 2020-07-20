import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdconsultComponent } from './dkkdconsult.component';

describe('DkkdconsultComponent', () => {
  let component: DkkdconsultComponent;
  let fixture: ComponentFixture<DkkdconsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdconsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
