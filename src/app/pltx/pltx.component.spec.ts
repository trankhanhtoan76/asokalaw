import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PltxComponent } from './pltx.component';

describe('PltxComponent', () => {
  let component: PltxComponent;
  let fixture: ComponentFixture<PltxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PltxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PltxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
