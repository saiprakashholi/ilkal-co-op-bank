import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-term',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './term.html',
  styleUrl: './term.scss',
})
export class Term {
  title = 'Term Deposits';
  applicableFrom = '01-03-2025';

  rates = [
    {
      period: '30 Days to 90 Days',
      general: '5.00%',
      senior: '5.00%',
    },
    {
      period: '91 Days to 180 Days',
      general: '6.50%',
      senior: '7.00%',
    },
    {
      period: '181 Days to 365 Days',
      general: '7.25%',
      senior: '7.50%',
    },
    {
      period: '1 Year & above upto 24 Months',
      general: '8.25%',
      senior: '8.50%',
    },
    {
      period: '24 Months & above upto 3 Years',
      general: '8.50%',
      senior: '8.75%',
    },
    {
      period: 'Bulk Deposits – 400 Days (₹15 Lakhs & Above)',
      general: '8.50%',
      senior: '8.80%',
    },
    {
      period: 'Bulk Deposits – 800 Days (₹15 Lakhs & Above)',
      general: '9.25%',
      senior: '9.25%',
    },
    {
      period: 'Deposits Double in 105 Months',
      general: '8.00%',
      senior: '8.00%',
    },
    {
      period: 'Recurring Deposit (6 to 12 Months)',
      general: '6.00%',
      senior: '6.50%',
    },
    {
      period: 'Recurring Deposit (13 Months & above)',
      general: '7.00%',
      senior: '7.50%',
    },
  ];
}
