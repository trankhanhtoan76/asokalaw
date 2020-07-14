import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevideosComponent } from './homevideos.component';

describe('HomevideosComponent', () => {
  let component: HomevideosComponent;
  let fixture: ComponentFixture<HomevideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
