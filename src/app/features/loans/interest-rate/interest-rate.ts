import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-interest-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest-rate.html',
  styleUrl: './interest-rate.scss',
})
export class InterestRate {
  constructor(public lang: LanguageService) { }

  get loans(): Array<{ name: string; rate: number }> {
    return this.lang.tArray<{ name: string; rate: number }>(
      'loans.interest-rate',
      'loans'
    );
  }
}
