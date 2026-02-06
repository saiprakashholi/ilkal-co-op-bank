import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type SupportedLang = 'en' | 'kn';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  currentLang: SupportedLang = 'en';
  private translations: Record<string, any> = {};

  // GitHub RAW base URL
  private readonly GITHUB_I18N_BASE =
    'https://raw.githubusercontent.com/saiprakashholi/ilkal-co-op-bank-i18n/prod';

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

      // footer 
      'footer',


      // contact us 
      'contact-us',

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
      const url =
        `${this.GITHUB_I18N_BASE}/${lang}/${module}.json?_=${cacheBust}`;

      this.http.get(url).subscribe({
        next: data => {
          this.translations[module] = data;
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
