import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-term-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './term-loan.html',
  styleUrl: './term-loan.scss',
})
export class TermLoan {

  hero = {
    title: 'Term Loan',
    subtitle: 'Long-term financing for fixed assets and expansion',
    icon: '🏭',
    description:
      'A Term Loan provides a lump sum amount to borrowers for capital-intensive needs. The loan is repaid over a fixed tenure with agreed repayment terms and interest rates.',
  };

  introPoints = [
    'Lump sum loan amount provided upfront',
    'Suitable for long-term capital expenditure',
    'Fixed or floating interest rate options',
    'Repayment through structured instalments',
  ];

  factoryLoan = {
    title: 'Term Loan – Factory Land & Building',
    points: [
      'Primary Security: Factory Land & Building',
      'Collateral Security: 60% – 65%',
      'Repayment Period: Maximum up to 5 Years',
      'Rate of Interest: Attractive ROI',
      'Margin: 40%',
    ],
  };

  mortgageLoan = {
    title: 'Mortgage Term Loan',
    points: [
      'Collateral Security: 60% – 65%',
      'Repayment Period: Maximum up to 5 Years',
      'Rate of Interest: Attractive ROI',
      'Margin: Not Applicable',
    ],
  };
}
