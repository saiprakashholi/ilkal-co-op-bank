import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, EMPTY, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

type SupportedLang = 'en' | 'kn';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  currentLang: SupportedLang = 'en';
  private translations: Record<string, any> = {};
  private loadedSubject = new Subject<string>();
  readonly loaded$ = this.loadedSubject.asObservable();
  private cache = new Map<string, any>();
  private readonly debug = !!environment.i18nDebug;
  private pending = 0;
  private allLoadedSubject = new Subject<void>();
  readonly allLoaded$ = this.allLoadedSubject.asObservable();

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
      'home.quick-tools',

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

      // search and calculators
      'search',
      'calculators',

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

      // legal
      'legal.terms',
      'legal.privacy',

      // loans
      'loans',
      'loans.vehicle',
      'loans.gold',
      'loans.business',
      'loans.housing',
      'loans.personal',
      'loans.interest-rate',


      // deposits
      'deposits',
      'deposits.saving',
      'deposits.current',
      'deposits.interest-rate',


    ];

    const cacheBust = Date.now();

    const shouldFallbackToLocal = environment.i18nSource !== 'local';

    this.pending = modules.length;

    modules.forEach(module => {
      const cacheKey = `${lang}:${module}`;
      if (this.cache.has(cacheKey)) {
        this.translations[module] = this.cache.get(cacheKey);
        this.loadedSubject.next(module);
        this.pending -= 1;
        if (this.pending === 0) {
          this.allLoadedSubject.next();
        }
        return;
      }

      const primaryBase =
        environment.i18nSource === 'local' ? this.LOCAL_I18N_BASE : this.GITHUB_I18N_BASE;
      const primaryUrl = `${primaryBase}/${lang}/${module}.json?_=${cacheBust}`;
      const fallbackUrl = `${this.LOCAL_I18N_BASE}/${lang}/${module}.json?_=${cacheBust}`;

      const loadAndStore = (url: string, source: string) =>
        this.http.get(url).pipe(
          retry({
            count: 2,
            delay: (_err, retryCount) => timer(300 * retryCount)
          }),
          catchError(err => {
            console.warn(`⚠️ Failed to load i18n (${source}): ${module}`, err);
            return EMPTY;
          })
        );

      loadAndStore(primaryUrl, primaryBase)
        .pipe(
          catchError(() => EMPTY)
        )
        .subscribe({
          next: data => {
            this.cache.set(cacheKey, data);
            this.translations[module] = data;
            if (this.debug) {
              // console.log(`✅ i18n loaded: ${module} (${primaryBase})`);
            }
            this.loadedSubject.next(module);
            this.pending -= 1;
            if (this.pending === 0) {
              this.allLoadedSubject.next();
            }
          },
          error: () => {
            // no-op; handled by retry/catchError
          },
          complete: () => {
            if (shouldFallbackToLocal && !this.translations[module]) {
              loadAndStore(fallbackUrl, this.LOCAL_I18N_BASE).subscribe({
                next: data => {
                  this.cache.set(cacheKey, data);
                  this.translations[module] = data;
                  if (this.debug) {
                    // console.log(`✅ i18n loaded: ${module} (${this.LOCAL_I18N_BASE})`);
                  }
                  this.loadedSubject.next(module);
                  this.pending -= 1;
                  if (this.pending === 0) {
                    this.allLoadedSubject.next();
                  }
                }
              });
              return;
            }

            if (!this.translations[module]) {
              this.pending -= 1;
              if (this.pending === 0) {
                this.allLoadedSubject.next();
              }
            }
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
