import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';

interface NoticeItem {
  text: string;
  url?: string;       // optional link
  newTab?: boolean;   // open in new tab
}

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notice.html',
  styleUrls: ['./notice.scss'],
})
export class NoticeComponent implements OnInit, OnDestroy {
  // 👇 Now supports array of NoticeItem or strings
  @Input() notices: (NoticeItem | string)[] = [
    'Introduced Mobile Banking App.',
    'Bank is Live on IMPS & UPI',
    {
      text: 'Hiring Staff for New Branches. Apply Now!',
      // url: '/careers',
      newTab: true
    },
  ];

  @Input() speed = 18;

  @ViewChild('ticker', { static: true })
  tickerEl!: ElementRef<HTMLElement | null>;

  private animElement: HTMLElement | null = null;
  private visibilityHandler = this.onVisibilityChange.bind(this);

  public messages: NoticeItem[] = [];
  public isPaused = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Normalize: convert strings to { text } objects
    this.messages = this.notices.map((n) =>
      typeof n === 'string' ? { text: n } : n
    );

    if (isPlatformBrowser(this.platformId)) {
      const native = this.tickerEl?.nativeElement;
      const el = native?.querySelector('.ticker-body') as HTMLElement | null;
      if (el) {
        this.animElement = el;
        this.animElement.style.setProperty('--scroll-duration', `${this.speed}s`);
      }
      document.addEventListener('visibilitychange', this.visibilityHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
    }
  }

  pause(): void {
    if (!this.animElement) return;
    this.animElement.style.animationPlayState = 'paused';
    this.isPaused = true;
  }

  resume(): void {
    if (!this.animElement) return;
    this.animElement.style.animationPlayState = 'running';
    this.isPaused = false;
  }

  toggle(): void {
    this.isPaused ? this.resume() : this.pause();
  }

  private onVisibilityChange(): void {
    if (document.hidden) this.pause();
    else this.resume();
  }
}
