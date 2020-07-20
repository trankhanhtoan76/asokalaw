import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhComponent } from './dknh.component';

describe('DknhComponent', () => {
  let component: DknhComponent;
  let fixture: ComponentFixture<DknhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
