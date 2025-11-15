import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTrip } from './your-trip';

describe('YourTrip', () => {
  let component: YourTrip;
  let fixture: ComponentFixture<YourTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourTrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourTrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
