import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnnouncementsComponent } from "./components/announcements/announcements.component";
import { NoticeComponent } from './components/notice/notice';
import { ManagementComponent } from './components/management/management';
import { LanguageService } from '../../services/language.service';

interface BankService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnnouncementsComponent,
    NoticeComponent, ManagementComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],

})
export class Home {

  // Notice board data
  public notice = 'Introduced Mobile Banking App. | Bank is Live on IMPS & UPI';

  // Our services data
  services: BankService[] = [
    {
      icon: '📲',
      title: 'UPI Payments',
      description:
        'Instant and secure money transfers using UPI. Send or receive money anytime using popular UPI apps with Ilkal Co-Operative Bank.',
    },
    {
      icon: '🏧',
      title: 'ATM Banking',
      description:
        '24×7 access to cash withdrawal, balance enquiry, mini statements, and other essential ATM banking services.',
    },
    {
      icon: '📱',
      title: 'Mobile Banking',
      description:
        'Access your account anytime through our mobile app. Check balances, transfer funds, and enjoy secure digital banking.',
    },
    {
      icon: '🔄',
      title: 'RTGS / NEFT',
      description:
        'Fast and reliable fund transfers to any bank in India using RTGS and NEFT facilities.',
    },
    {
      icon: '🔐',
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

  financialStats = [
    { key: 'SHARE_CAPITAL', value: '12+', unit: 'Cr' },
    { key: 'NET_PROFIT', value: '4+', unit: 'Cr' },
    { key: 'ADVANCES', value: '300+', unit: 'Cr' },
    { key: 'DEPOSITS', value: '431+', unit: 'Cr' }
  ];


}
