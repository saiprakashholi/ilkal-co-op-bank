import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving.html',
  styleUrl: './saving.scss',
})
export class Saving {
  constructor(private router: Router) { }

  page = {
    title: 'Savings Deposit',
    description:
      'A Savings Bank Account helps you securely set aside your savings while enjoying easy access to funds and earning steady interest.',
    interestRate: '3.0% p.a.',
  };

  benefits = [
    'Minimum balance without cheque book – ₹500',
    'Minimum balance with cheque book – ₹1000',
    'Multi-City Cheque Book facility',
    'RTGS / NEFT facility',
    'SMS alerts on registered mobile number',
    'Mobile Banking Application access',
  ];

  eligibility = [
    'Individuals (Single or Joint account)',
    'Societies',
    'Trusts',
  ];

  documents = {
    photos: ['Two recent passport-size color photographs'],
    addressProof: [
      'Aadhaar Card',
      'Driving License',
      'Voter ID',
      'Passport',
      'Electricity Bill',
      'Telephone Bill',
    ],
    identityProof: [
      'Aadhaar Card',
      'PAN Card',
      'Driving License',
      'Voter ID',
      'Passport',
    ],
  };

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
