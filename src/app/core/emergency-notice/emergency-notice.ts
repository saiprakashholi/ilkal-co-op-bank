import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-emergency-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency-notice.html',
  styleUrl: './emergency-notice.scss',
})
export class EmergencyNoticeComponent implements OnInit, OnDestroy {

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get notice(): any {
    const notice = this.lang.t('core.emergency-notice', 'notice') as any;
    return notice && typeof notice === 'object' ? notice : {};
  }
  show = false;

  currentIndex = 0;
  sliderTimer: any;

  ngOnInit(): void {
    if (!this.notice?.enabled) return;

    const now = Date.now();
    const start = new Date(this.notice.startTime).getTime();
    const end = new Date(this.notice.endTime).getTime();

    if (now >= start && now <= end) {
      this.show = true;

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
    return !!this.notice?.images?.enabled &&
           !!this.notice?.images?.items?.length;
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
