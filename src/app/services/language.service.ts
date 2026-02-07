import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

type SupportedLang = 'en' | 'kn';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  currentLang: SupportedLang = 'en';
  private translations: Record<string, any> = {};
  private loadedSubject = new Subject<string>();
  readonly loaded$ = this.loadedSubject.asObservable();

  // GitHub RAW base URL
  private readonly GITHUB_I18N_BASE =
    'https://raw.githubusercontent.com/saiprakashholi/ilkal-co-op-bank-i18n/prod';
  private readonly LOCAL_I18N_BASE = 'assets/i18n';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  loadLanguage(lang: SupportedLang): void {
    this.currentLang = lang;

    // 🔒 SSR safe
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.translations = {};

    const modules: string[] = [
      // common 
      'common',

      // home page
      'home',
      'home.announcements',
      'home.notice',
      'home.management',
      'home.home-banner-carousel',
      'home.financial-strength',

      // footer 
      'footer',
      'core.header',
      'core.footer',
      'core.bank-brand',
      'core.emergency-notice',

      // about us
      'about-us',
      'about-us.directors-list',
      'about-us.founders-list',
      'about-us.presidents-list',
      'about-us.fin-key-indicators',


      // contact us 
      'contact-us',

      // gallery
      'gallery.gallery',
      'gallery.photo-list',

      // others
      'others.others',
      'others.safe-banking',
      'others.service-charges',
      'others.others-agm',
      'others.downloads',

      // locations
      'locations.locations',

      // agm
      'agm',

      // notices
      'notices.notices',

      // Service module
      'services',
      'services.upi',
      'services.imps',
      'services.mobile',
      'services.atm',
      'services.rtgs-neft',
      'services.locker',

      // misc
      'misc.complaint',
      'misc.enquiry',
      'misc.career',

      // loans
      'loans.vehicle',
      'loans.gold',
      'loans.business',
      'loans.housing',
      'loans.personal',
      'loans.interest-rate',


      // deposits
      'deposits.saving',
      'deposits.current',
      'deposits.interest-rate',


    ];

    const cacheBust = Date.now();

    modules.forEach(module => {
      const base =
        environment.i18nSource === 'local' ? this.LOCAL_I18N_BASE : this.GITHUB_I18N_BASE;
      const url = `${base}/${lang}/${module}.json?_=${cacheBust}`;

      this.http.get(url).subscribe({
        next: data => {
          this.translations[module] = data;
          this.loadedSubject.next(module);
        },
        error: err => {
          console.warn(`⚠️ Failed to load i18n: ${module}`, err);
        }
      });
    });
  }

  t(module: string, key: string): string {
    return this.translations[module]?.[key] ?? key;
  }

  tArray<T = any>(module: string, key: string): T[] {
    return this.translations[module]?.[key] ?? [];
  }
}
