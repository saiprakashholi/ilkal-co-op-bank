import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-financial-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-strength.html',
  styleUrl: './financial-strength.scss',
})
export class FinancialStrength implements AfterViewInit {

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  financialStats = [
    { key: 'SHARE_CAPITAL', value: 12, unit: 'Cr' },
    { key: 'NET_PROFIT', value: 4, unit: 'Cr' },
    { key: 'ADVANCES', value: 300, unit: 'Cr' },
    { key: 'DEPOSITS', value: 431, unit: 'Cr' }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // SSR: do nothing
    }

    // Run after DOM is painted
    setTimeout(() => {
      this.startCountUp();
    }, 200);
  }

  startCountUp(): void {
    this.counters.forEach((counter, index) => {
      const target = this.financialStats[index].value;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));

      const interval = setInterval(() => {
        current += step;

        if (current >= target) {
          current = target;
          clearInterval(interval);
        }

        counter.nativeElement.textContent = String(current);
      }, 20);
    });
  }
}
