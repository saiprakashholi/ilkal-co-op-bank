import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerCarousel } from './home-banner-carousel';

describe('HomeBannerCarousel', () => {
  let component: HomeBannerCarousel;
  let fixture: ComponentFixture<HomeBannerCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBannerCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
