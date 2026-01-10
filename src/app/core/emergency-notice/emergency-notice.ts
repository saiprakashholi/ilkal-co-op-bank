import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-emergency-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency-notice.html',
  styleUrl: './emergency-notice.scss',
})
export class EmergencyNoticeComponent implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  EMERGENCY_NOTICE = {
    enabled: true,
    type: 'warning',

    title: 'Awareness Public Notice',
    message:
      'Customers are advised to stay alert against cyber frauds. Do not share your OTP, PIN, passwords, or card details with anyone.',

    showValidity: false,
    effectiveStartTime: '2025-12-29T18:00:00',
    effectiveEndTime: '2025-12-29T21:00:00',

    startTime: '2025-12-11T15:00:00',
    endTime: '2026-12-17T21:00:00',

    images: {
      enabled: true,
      heightDesktop: 360,
      heightMobile: 100,
      maxWidthDesktop: 420,
      fit: 'contain',
      intervalMs: 3000,
      items: [
        '/assets/emergency-notice/rbi1.jpeg',
        '/assets/emergency-notice/rbi2.jpeg',
        '/assets/emergency-notice/cyber-awareness.jpeg',
        '/assets/emergency-notice/national-security-awareness.jpeg'
      ],
    },
  };

  notice = this.EMERGENCY_NOTICE;
  show = false;

  currentIndex = 0;
  sliderTimer: any;

  ngOnInit(): void {
    if (!this.notice.enabled) return;

    const now = Date.now();
    const start = new Date(this.notice.startTime).getTime();
    const end = new Date(this.notice.endTime).getTime();

    if (now >= start && now <= end) {
      this.show = true;

      // 🔒 Browser-only logic
      if (isPlatformBrowser(this.platformId)) {
        this.startSlider();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  close(): void {
    this.show = false;
    this.stopSlider();
  }

  hasImages(): boolean {
    return !!this.notice.images?.enabled &&
           !!this.notice.images?.items?.length;
  }

  startSlider(): void {
    if (!this.hasImages()) return;

    const total = this.notice.images.items.length;

    this.sliderTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % total;
    }, this.notice.images.intervalMs);
  }

  stopSlider(): void {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }
  }

  getIcon(): string {
    switch (this.notice.type) {
      case 'error': return '⛔';
      case 'warning': return '⚠️';
      default: return 'ℹ️';
    }
  }
}
