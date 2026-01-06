import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  intervalId: any;
  slideIntervalMs = 2000; // 👈 change anytime (5s now)
  isResetting = false;



  constructor(public lang: LanguageService) {}

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  get banners(): BannerItem[] {
    return this.lang.tArray<BannerItem>('home', 'banner.items');
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

  if (this.currentIndex === this.banners.length - 1) {
    // reset without animation
    this.isResetting = true;
    this.currentIndex = 0;

    setTimeout(() => {
      this.isResetting = false;
    });
  } else {
    this.currentIndex++;
  }
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

  /** 👇 THIS is the key */
  getTranslateX(index: number): string {
    return `translateX(${(index - this.currentIndex) * 100}%)`;
  }
}
