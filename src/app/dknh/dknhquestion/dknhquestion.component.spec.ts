import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhquestionComponent } from './dknhquestion.component';

describe('DknhquestionComponent', () => {
  let component: DknhquestionComponent;
  let fixture: ComponentFixture<DknhquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
