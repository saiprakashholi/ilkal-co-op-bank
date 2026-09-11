import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnnouncementsComponent } from "./components/announcements/announcements.component";
import { NoticeComponent } from './components/notice/notice';
import { ManagementComponent } from './components/management/management';
import { LanguageService } from '../../services/language.service';
import { HomeBannerCarousel } from "./components/home-banner-carousel/home-banner-carousel";
import { FinancialStrength } from "./components/financial-strength/financial-strength";

interface BankService {
  icon: string;
  title: string;
  description: string;
}

interface HomeTool {
  title: string;
  description: string;
  url: string;
  fragment?: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnnouncementsComponent,
    NoticeComponent, ManagementComponent, HomeBannerCarousel, FinancialStrength],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],

})
export class Home implements AfterViewInit, OnDestroy {
  get services(): BankService[] {
    return this.lang.tArray<BankService>('home', 'services');
  }

  get quickTools(): HomeTool[] {
    return this.lang.tArray<HomeTool>('home.quick-tools', 'items');
  }

  public mobileMenuOpen = false;

  currentYear: number = new Date().getFullYear();

  private observer?: IntersectionObserver;

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!elements.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      elements.forEach(el => el.classList.add('reveal-ready'));
    }

    const revealNow = (el: HTMLElement) => {
      el.classList.add('reveal-show');
      el.classList.remove('reveal-ready');
    };

    if (!('IntersectionObserver' in window)) {
      elements.forEach(revealNow);
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          this.zone.run(() => {
            const el = entry.target as HTMLElement;
            revealNow(el);
            this.observer?.unobserve(entry.target);
          });
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach(el => this.observer?.observe(el));

    // Kickstart above-the-fold reveals in case IO doesn't trigger immediately
    requestAnimationFrame(() => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          revealNow(el);
          this.observer?.unobserve(el);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }


  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  scrollTo(targetId: string) {
    const headerOffset = 90; // adjust based on your sticky header height
    const element = document.getElementById(targetId);

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    this.smoothScrollTo(offsetPosition, 600); // 600ms animation
  }

  smoothScrollTo(targetY: number, duration: number) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const easing = (t: number) => 1 - Math.pow(1 - t, 4); // smooth easing

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startY + diff * easing(percent));

      if (time < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  // used for our services sections
  trackByTitle(_: number, item: BankService): string {
    return item.title;
  }




}
