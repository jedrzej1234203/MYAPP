import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightresComponent } from './flightres.component';

describe('FlightresComponent', () => {
  let component: FlightresComponent;
  let fixture: ComponentFixture<FlightresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightresComponent]
    });
    fixture = TestBed.createComponent(FlightresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
