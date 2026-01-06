import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang: 'en' | 'kn' = 'en';
  private translations: Record<string, any> = {};

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  loadLanguage(lang: 'en' | 'kn') {
    this.currentLang = lang;

    // 🔒 SSR SAFE: skip HTTP during prerender
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const modules = [
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

    ];

    modules.forEach(m => {
      this.http
        .get(`/assets/i18n/${lang}/${m}.json`)
        .subscribe({
          next: data => {
            this.translations[m] = data;
          },
          error: err => {
            console.warn(`Failed to load i18n ${m}`, err);
          }
        });
    });
  }

  t(module: string, key: string): string {
    return this.translations[module]?.[key] || key;
  }

  // tArray(module: string, key: string): string[] {
  //   return this.translations[module]?.[key] || [];
  // }
  tArray<T = any>(module: string, key: string): T[] {
  return this.translations[module]?.[key] || [];
}


}
