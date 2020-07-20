import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdquestionComponent } from './dkkdquestion.component';

describe('DkkdquestionComponent', () => {
  let component: DkkdquestionComponent;
  let fixture: ComponentFixture<DkkdquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
