import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest-rate.html',
  styleUrl: './interest-rate.scss',
})
export class InterestRate {
  deposits = [
    { title: '15 – 45 Days', rate: 4.5 },
    { title: '46 – 90 Days', rate: 5.5 },
    { title: '91 – 180 Days', rate: 6.5 },
    { title: '181 – 364 Days', rate: 7.0 },
    { title: '12 – 35 Months', rate: 8.25 },
    { title: '36 Months & Above', rate: 8.5 },
    { title: 'Bulk Deposit', rate: 8.75 },
  ];
}
