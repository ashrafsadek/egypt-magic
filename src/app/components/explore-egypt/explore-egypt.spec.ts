import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEgypt } from './explore-egypt';

describe('ExploreEgypt', () => {
  let component: ExploreEgypt;
  let fixture: ComponentFixture<ExploreEgypt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreEgypt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreEgypt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
