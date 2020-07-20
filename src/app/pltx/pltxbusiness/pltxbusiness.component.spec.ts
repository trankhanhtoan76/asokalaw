import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PltxbusinessComponent } from './pltxbusiness.component';

describe('PltxbusinessComponent', () => {
  let component: PltxbusinessComponent;
  let fixture: ComponentFixture<PltxbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PltxbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PltxbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
