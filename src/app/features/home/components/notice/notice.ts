import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';

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
export class NoticeComponent implements OnInit, OnDestroy, OnChanges {
  // 👇 Now supports array of NoticeItem or strings
  @Input() notices: (NoticeItem | string)[] = [];

  @Input() speed = 18;

  @ViewChild('ticker', { static: true })
  tickerEl!: ElementRef<HTMLElement | null>;

  private animElement: HTMLElement | null = null;
  private visibilityHandler = this.onVisibilityChange.bind(this);
  private langSub?: Subscription;
  private useI18n = true;

  public messages: NoticeItem[] = [];
  public isPaused = false;

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notices']) {
      this.useI18n = !this.notices?.length;
      this.refreshFromI18n();
    }
  }

  ngOnInit(): void {
    this.useI18n = !this.notices?.length;
    this.refreshFromI18n();

    this.langSub = this.lang.loaded$.subscribe(module => {
      console.log("Received Notice module : ", module);
      if (module === 'home.notice') {
        this.refreshFromI18n();
      }
    });

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
    this.langSub?.unsubscribe();
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

  private refreshFromI18n(): void {
    if (this.useI18n) {
      const items = this.lang.tArray<NoticeItem>('home.notice', 'items');
      if (items.length) {
        this.notices = items;
      }
    }

    // Normalize: convert strings to { text } objects
    this.messages = this.notices.map((n) =>
      typeof n === 'string' ? { text: n } : n
    );
  }
}
