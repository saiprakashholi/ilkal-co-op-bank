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

  get deposits(): Array<{ title: string; rate: number }> {
    return this.lang.tArray<{ title: string; rate: number }>(
      'deposits.interest-rate',
      'deposits'
    );
  }
}
