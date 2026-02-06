import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';

interface BannerItem {
  image: string;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-home-banner-carousel',
  imports: [CommonModule],
  templateUrl: './home-banner-carousel.html',
  styleUrl: './home-banner-carousel.scss',
})
export class HomeBannerCarousel implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any = null;

  slideIntervalMs = 4000;

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    // ✅ IMPORTANT: run autoplay only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  get banners(): BannerItem[] {
    return this.lang.tArray<BannerItem>('home.home-banner-carousel', 'items');
  }

  startAutoScroll() {
    this.stopAutoScroll();
    this.intervalId = setInterval(() => {
      this.next();
    }, this.slideIntervalMs);
  }

  stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next() {
    if (!this.banners.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prev() {
    if (!this.banners.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) %
      this.banners.length;
  }

  goTo(i: number) {
    this.currentIndex = i;
  }

  getTranslateX(index: number): string {
    return `translateX(${(index - this.currentIndex) * 100}%)`;
  }
}
