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
  public aboutUsText: string = 'Ilkal Co-operative Bank Ltd. has served the local community for over a Sixty plus years with trusted banking products and digital services. We focus on transparent pricing, fast service and local empowerment.';

  // Notice board data
  public notice = 'Introduced Mobile Banking App. | Bank is Live on IMPS & UPI';

  // Our services data
  services: BankService[] = [
    {
      icon: '/assets/upi-icon.png',
      title: 'UPI Payments',
      description:
        'Instant and secure money transfers using UPI. Send or receive money anytime using popular UPI apps with Ilkal Co-Operative Bank.',
    },
    {
      icon: '/assets/atm.png',
      title: 'ATM Banking',
      description:
        '24×7 access to cash withdrawal, balance enquiry, mini statements, and other essential ATM banking services.',
    },
    {
      icon: '/assets/mobile-banking.png',
      title: 'Mobile Banking',
      description:
        'Access your account anytime through our mobile app. Check balances, transfer funds, and enjoy secure digital banking.',
    },
    {
      icon: '/assets/rtgs-neft.png',
      title: 'RTGS / NEFT',
      description:
        'Fast and reliable fund transfers to any bank in India using RTGS and NEFT facilities.',
    },
    {
      icon: '/assets/imps.png',
      title: 'IMPS',
      description:
        'Instant interbank money transfer service.',
    },
    {
      icon: '/assets/locker-logo.png',
      title: 'Safe Deposit Lockers',
      description:
        'Secure locker facilities to protect your valuables and important documents with complete peace of mind.',
    },
  ];

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
