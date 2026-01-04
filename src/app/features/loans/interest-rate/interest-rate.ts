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
  loans = [
    { name: 'Home Loan', rate: 11.0 },
    { name: 'Vehicle Loan', rate: 13.5 },
    { name: 'Business Loan', rate: 13.0 },
    // { name: 'Education Loan', rate: 11.0 },
    { name: 'Gold Loan', rate: 11.0 },
    { name: 'Salaried Loan', rate: 13.5 },
  ];
}