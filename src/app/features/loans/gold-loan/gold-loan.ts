import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gold-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gold-loan.html',
  styleUrl: './gold-loan.scss',
})
export class GoldLoan {

  hero = {
    title: 'Gold Loan',
    subtitle: 'Unlock the value of your gold with quick financing',
    icon: '🪙',
    description:
      'A Gold Loan allows you to meet your financial needs by pledging gold jewellery as collateral. The bank safely keeps your gold and returns it once the loan is fully repaid.',
  };

  overview = [
    { label: 'Purpose', value: 'Loan against pledge of gold jewellery' },
    { label: 'Loan Amount', value: 'Up to 70% of gold valuation' },
    { label: 'Margin', value: '30% of gold valuation' },
    { label: 'Interest Rate', value: '11% p.a.' },
  ];

  repayment = [
    'Loan period up to 1 year',
    'Monthly repayment facility available',
    'Maximum repayment tenure of 12 months',
  ];

  security = [
    'Pledge of gold jewellery',
    'Gold is securely stored with the bank',
  ];

  charges = [
    'Processing fee as per bank norms',
    'Nominal membership / share holding as applicable',
  ];

  documents = [
    'Latest passport size photograph',
    'Photo identity proof of applicant',
    'Residential proof of applicant',
    'Identity and address proof of guarantor(s)',
  ];
}
