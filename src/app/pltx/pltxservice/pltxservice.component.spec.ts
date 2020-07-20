import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PltxserviceComponent } from './pltxservice.component';

describe('PltxserviceComponent', () => {
  let component: PltxserviceComponent;
  let fixture: ComponentFixture<PltxserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PltxserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PltxserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
