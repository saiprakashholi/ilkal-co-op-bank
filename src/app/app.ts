import { Component, signal, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { BankBrand } from "./core/bank-brand/bank-brand";
import { EmergencyNoticeComponent } from "./core/emergency-notice/emergency-notice";
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Header,
    Footer,
    BankBrand,
    EmergencyNoticeComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('ilkal-co-op-bank');

  constructor(
    private langService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language?.startsWith('kn') ? 'kn' : 'en';
      this.langService.loadLanguage(browserLang);
    } else {
      // SSR fallback
      this.langService.loadLanguage('en');
    }
  }
}
