import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { BankBrand } from "./core/bank-brand/bank-brand";
import { EmergencyNoticeComponent } from "./core/emergency-notice/emergency-notice";
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
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
export class App {
  protected readonly title = signal('ilkal-co-op-bank');
  constructor(private langService: LanguageService) {
    const browserLang = navigator.language.startsWith('kn') ? 'kn' : 'en';
    this.langService.loadLanguage(browserLang);
  }

}
