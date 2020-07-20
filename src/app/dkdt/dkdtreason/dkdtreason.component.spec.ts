import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkdtreasonComponent } from './dkdtreason.component';

describe('DkdtreasonComponent', () => {
  let component: DkdtreasonComponent;
  let fixture: ComponentFixture<DkdtreasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkdtreasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkdtreasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
