import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-agm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agm.html',
  styleUrl: './agm.scss',
})
export class Agm implements AfterViewInit, OnDestroy {

  @ViewChild('financeChart') canvasRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get tableHeaders(): any {
    return this.lang.t('agm', 'tableHeaders') as any;
  }

  reports = [
    { year: '2015-16', members: 20060, deposits: 19394.48, loans: 17559.30, profit: 426.01 },
    { year: '2016-17', members: 20506, deposits: 22613.72, loans: 16254.11, profit: 373.57 },
    { year: '2017-18', members: 20986, deposits: 25546.81, loans: 19056.02, profit: 385.99 },
    { year: '2018-19', members: 21490, deposits: 28636.22, loans: 21706.06, profit: 414.40 },
    { year: '2019-20', members: 21238, deposits: 31992.23, loans: 24406.49, profit: 400.21 },
    { year: '2020-21', members: 21771, deposits: 36304.35, loans: 22522.83, profit: 381.78 },
    { year: '2021-22', members: 22258, deposits: 38040.85, loans: 28226.21, profit: 402.09 },
    { year: '2022-23', members: 22630, deposits: 39638.03, loans: 28267.64, profit: 528.23 },
    { year: '2023-24', members: 23958, deposits: 41010.71, loans: 31082.22, profit: 754.18 },
    { year: '2024-25', members: 24301, deposits: 43101.47, loans: 30198.48, profit: 603.57 }
  ];

  ngAfterViewInit() {
    // ✅ VERY IMPORTANT: browser-only guard
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const ctx = this.canvasRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const labels = this.lang.t('agm', 'labels') as any;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.reports.map(r => r.year),
        datasets: [
          {
            label: labels?.deposits ?? 'Deposits (₹ Lakhs)',
            data: this.reports.map(r => r.deposits),
            tension: 0.4
          },
          {
            label: labels?.loans ?? 'Loans (₹ Lakhs)',
            data: this.reports.map(r => r.loans),
            tension: 0.4
          },
          {
            label: labels?.profit ?? 'Profit (₹ Lakhs)',
            data: this.reports.map(r => r.profit),
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
