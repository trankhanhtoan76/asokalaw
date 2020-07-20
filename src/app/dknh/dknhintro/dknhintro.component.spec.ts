import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknhintroComponent } from './dknhintro.component';

describe('DknhintroComponent', () => {
  let component: DknhintroComponent;
  let fixture: ComponentFixture<DknhintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknhintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknhintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
