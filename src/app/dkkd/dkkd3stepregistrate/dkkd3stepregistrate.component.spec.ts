import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dkkd3stepregistrateComponent } from './dkkd3stepregistrate.component';

describe('Dkkd3stepregistrateComponent', () => {
  let component: Dkkd3stepregistrateComponent;
  let fixture: ComponentFixture<Dkkd3stepregistrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dkkd3stepregistrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dkkd3stepregistrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
