import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountnumberofusedComponent } from './countnumberofused.component';

describe('CountnumberofusedComponent', () => {
  let component: CountnumberofusedComponent;
  let fixture: ComponentFixture<CountnumberofusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountnumberofusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountnumberofusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
