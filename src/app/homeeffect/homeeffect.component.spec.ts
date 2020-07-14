import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeffectComponent } from './homeeffect.component';

describe('HomeeffectComponent', () => {
  let component: HomeeffectComponent;
  let fixture: ComponentFixture<HomeeffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeeffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeeffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
