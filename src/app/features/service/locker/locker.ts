import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-locker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locker.html',
  styleUrl: './locker.scss',
})
export class Locker {

  constructor(public lang: LanguageService) {}

  lockers = [
    {
      size: 'SMALL',
      // dimensions: '0.5 × 0.70 × 1.75',
      // rent: '1000 + GST'
    },
    {
      size: 'MEDIUM',
      // dimensions: '0.7 × 0.70 × 1.75',
      // rent: '1500 + GST'
    },
    {
      size: 'BIG',
      // dimensions: '0.75 × 1.00 × 1.75',
      // rent: '3000 + GST'
    },
    {
      size: 'LARGE',
      // dimensions: '1.5 × 1.65 × 1.75',
      // rent: '4500 + GST'
    }
  ];
}
