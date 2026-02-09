import { Component, signal, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { BankBrand } from "./core/bank-brand/bank-brand";
import { EmergencyNoticeComponent } from "./core/emergency-notice/emergency-notice";
import { LoadingComponent } from './core/loading/loading';
import { LanguageService } from './services/language.service';
import { LoadingService } from './core/loading/loading.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Header,
    Footer,
    BankBrand,
    EmergencyNoticeComponent,
    LoadingComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('ilkal-co-op-bank');
  showEmergencyNotice = false;
  private firstNavigation = true;

  constructor(
    private langService: LanguageService,
    private router: Router,
    private loadingService: LoadingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language?.startsWith('kn') ? 'kn' : 'en';
      this.loadingService.show();
      this.langService.loadLanguage(browserLang);
    } else {
      // SSR fallback
      this.loadingService.show();
      this.langService.loadLanguage('en');
    }

    this.langService.allLoaded$.subscribe(() => {
      this.loadingService.hide();
    });

    if (isPlatformBrowser(this.platformId)) {
      this.showEmergencyNotice = this.router.url === '/';
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          if (this.firstNavigation) {
            this.firstNavigation = false;
            this.showEmergencyNotice = event.urlAfterRedirects === '/';
            return;
          }
          // Hide on any client-side navigation
          this.showEmergencyNotice = false;
          // Scroll to top on route change (e.g., footer links)
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  }
}
