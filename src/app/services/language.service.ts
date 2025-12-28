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
  ) {}

  loadLanguage(lang: 'en' | 'kn') {
    this.currentLang = lang;

    // 🔒 SSR SAFE: skip HTTP during prerender
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const modules = [
      'services',
      'services.upi'
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
}
