import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

type DepositMode = 'fd' | 'rd';

@Component({
  selector: 'app-calculators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculators.html',
  styleUrl: './calculators.scss',
})
export class Calculators {
  depositMode: DepositMode = 'fd';
  fdPrincipal = 100000;
  rdMonthlyDeposit = 5000;
  depositRate = 7.5;
  depositMonths = 12;

  loanAmount = 500000;
  loanRate = 11;
  loanMonths = 60;

  goldWeight = 20;
  goldRatePerGram = 6000;
  goldLoanToValue = 75;

  constructor(public lang: LanguageService) {}

  get isKannada(): boolean {
    return this.lang.currentLang === 'kn';
  }

  get depositPrincipal(): number {
    return this.depositMode === 'fd'
      ? this.fdPrincipal
      : this.rdMonthlyDeposit * this.depositMonths;
  }

  get depositMaturity(): number {
    const monthlyRate = this.depositRate / 100 / 12;

    if (this.depositMode === 'fd') {
      return this.fdPrincipal * Math.pow(1 + monthlyRate, this.depositMonths);
    }

    if (monthlyRate === 0) {
      return this.rdMonthlyDeposit * this.depositMonths;
    }

    return (
      this.rdMonthlyDeposit *
      ((Math.pow(1 + monthlyRate, this.depositMonths) - 1) / monthlyRate) *
      (1 + monthlyRate)
    );
  }

  get depositInterest(): number {
    return this.depositMaturity - this.depositPrincipal;
  }

  get loanEmi(): number {
    const monthlyRate = this.loanRate / 100 / 12;
    if (this.loanMonths <= 0) return 0;
    if (monthlyRate === 0) return this.loanAmount / this.loanMonths;

    const factor = Math.pow(1 + monthlyRate, this.loanMonths);
    return (this.loanAmount * monthlyRate * factor) / (factor - 1);
  }

  get loanTotalPayment(): number {
    return this.loanEmi * this.loanMonths;
  }

  get loanInterest(): number {
    return this.loanTotalPayment - this.loanAmount;
  }

  get goldValue(): number {
    return this.goldWeight * this.goldRatePerGram;
  }

  get goldEstimate(): number {
    return this.goldValue * (this.goldLoanToValue / 100);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Number.isFinite(value) ? value : 0);
  }

  clampNumber(value: number, min: number, max: number): number {
    if (!Number.isFinite(value)) return min;
    return Math.min(Math.max(value, min), max);
  }
}
