import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    currentLang = 'en';
    private translations: any = {};

    constructor(private http: HttpClient) { }


    loadLanguage(lang: 'en' | 'kn') {
        this.currentLang = lang;

        const modules = [
            // 'common',
            // 'header',
            // 'footer',
            // 'loans',
            // 'deposits',
            // 'notices'
            'services',
            'services.upi',
            
        ];

        modules.forEach(m => {
            this.http
                .get(`/assets/i18n/${lang}/${m}.json`)
                .subscribe(data => {
                    // console.log(`Loaded ${m} translations for ${lang}:`, data);
                    this.translations[m] = data;
                });
        });
    }

    t(module: string, key: string): string {
        // console.log("LanguageService t()", module, key, this.translations[module]?.[key]);
        return this.translations[module]?.[key] || key;
    }
}
