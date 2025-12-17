import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.html',
  styleUrl: './loans.scss',
})
export class Loans {
  loans = [
    { name: 'Home Loan', rate: 11.0 },
    { name: 'Vehicle Loan', rate: 13.5 },
    { name: 'Business Loan', rate: 13.0 },
    { name: 'Education Loan', rate: 11.0 },
    { name: 'Gold Loan', rate: 13.0 },
  ];
}
