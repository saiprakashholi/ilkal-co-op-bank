import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deposits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deposits.html',
  styleUrl: './deposits.scss',
})
export class Deposits {
  deposits = [
    { title: '15 – 45 Days', rate: 4.5 },
    { title: '46 – 90 Days', rate: 5.5 },
    { title: '91 – 180 Days', rate: 6.5 },
    { title: '181 – 364 Days', rate: 7.0 },
    { title: '12 – 35 Months', rate: 8.5 },
    { title: '36 Months & Above', rate: 9.0 },
    { title: 'Bulk Deposit', rate: 9.0 },
  ];
}
