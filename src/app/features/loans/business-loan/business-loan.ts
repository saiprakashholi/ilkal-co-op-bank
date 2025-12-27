import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-loan.html',
  styleUrl: './business-loan.scss',
})
export class BusinessLoan {

  hero = {
    title: 'Business Loan',
    subtitle: 'Working capital support for growing businesses',
    icon: '🏢',
    description:
      'A Business Loan is offered to business owners with an existing running enterprise who require external funds for day-to-day operations, expansion, or capital requirements.',
  };

  introPoints = [
    'Meeting working capital requirements',
    'Payment of employee salaries and operational expenses',
    'Purchase of machinery and equipment',
    'Business expansion to new locations',
  ];

  cashCreditHypothecation = {
    title: 'Cash Credit – Hypothecation',
    points: [
      'Primary Security: Stock and Book Debts',
      'Collateral Security: 100%',
      'Margin: Stock @ 25%, Book Debts (age up to 90 days) @ 50%',
      'Rate of Interest: 15.00%',
      'Repayment Period: 1 Year',
    ],
  };

  securedCashCredit = {
    title: 'Secured Cash Credit',
    points: [
      'Primary Security: Property',
      'Collateral Security: 150%',
      'Margin: Stock @ 25%, Book Debts (age up to 90 days) @ 50%',
      'Rate of Interest: Attractive ROI',
      'Repayment Period: 1 Year',
    ],
  };
}
