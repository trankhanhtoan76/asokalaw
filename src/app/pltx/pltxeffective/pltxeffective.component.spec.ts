import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PltxeffectiveComponent } from './pltxeffective.component';

describe('PltxeffectiveComponent', () => {
  let component: PltxeffectiveComponent;
  let fixture: ComponentFixture<PltxeffectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PltxeffectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PltxeffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
