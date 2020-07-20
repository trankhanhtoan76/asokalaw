import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DknheffectivecontentComponent } from './dknheffectivecontent.component';

describe('DknheffectivecontentComponent', () => {
  let component: DknheffectivecontentComponent;
  let fixture: ComponentFixture<DknheffectivecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DknheffectivecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DknheffectivecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
