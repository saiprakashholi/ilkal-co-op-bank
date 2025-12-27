import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current.html',
  styleUrl: './current.scss',
})
export class Current {
  constructor(private router: Router) { }

  page = {
    title: 'Current Deposit',
    description:
      'A Current Account is designed for businesses and individuals with frequent transactions, offering flexibility, convenience, and seamless banking operations.',
  };

  benefits = [
    'No restriction on transactions either in number or amount',
    'Minimum balance without cheque book – ₹1000',
    'Minimum balance with cheque book – ₹2000',
    'Multi-City Cheque Book facility',
    'RTGS / NEFT facility',
    'SMS alerts on registered mobile number',
  ];

  eligibility = [
    'Individuals',
    'Businessmen',
    'Proprietorship Concerns',
    'Partnership Firms',
    'Public or Private Limited Companies',
    'Societies',
    'Trusts',
    'HUF Accounts',
  ];

  documents = {
    photos: ['Two passport-size color photographs'],
    mandatory: ['PAN Card'],
    addressProof: [
      'Aadhaar Card',
      'Driving License',
      'Voter ID',
      'Passport',
      'Electricity Bill',
      'Telephone Bill',
    ],
    identityProof: [
      'Driving License with current address',
      'Voter ID',
      'Passport',
      'PAN Card',
      'Aadhaar Card',
    ],
    note:
      'For Proprietorship / Partnership Firms / Public or Private Limited Companies / Trusts / HUF accounts, additional documents may be required as per bank norms.',
  };

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
