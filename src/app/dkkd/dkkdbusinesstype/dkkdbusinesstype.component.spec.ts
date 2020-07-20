import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkkdbusinesstypeComponent } from './dkkdbusinesstype.component';

describe('DkkdbusinesstypeComponent', () => {
  let component: DkkdbusinesstypeComponent;
  let fixture: ComponentFixture<DkkdbusinesstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkkdbusinesstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkkdbusinesstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
