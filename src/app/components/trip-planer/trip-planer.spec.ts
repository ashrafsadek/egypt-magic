import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlaner } from './trip-planer';

describe('TripPlaner', () => {
  let component: TripPlaner;
  let fixture: ComponentFixture<TripPlaner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripPlaner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripPlaner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
