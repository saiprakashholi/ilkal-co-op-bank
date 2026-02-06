import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnnouncementsComponent,
    NoticeComponent, ManagementComponent, HomeBannerCarousel, FinancialStrength],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],

})
export class Home {
  get services(): BankService[] {
    return this.lang.tArray<BankService>('home', 'services');
  }

  public mobileMenuOpen = false;

  currentYear: number = new Date().getFullYear();

  constructor(public lang: LanguageService) { }


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
