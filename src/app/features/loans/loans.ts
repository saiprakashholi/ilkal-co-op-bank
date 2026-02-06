import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './loans.html',
  styleUrl: './loans.scss',
})
export class Loans {
   list =  [
        { label: 'Personal Loan', url: 'personal' },
        { label: 'Housing Loan', url: 'housing' },
        { label: 'Vehicle Loan', url: 'vehical' },
        { label: 'Gold Loan', url: 'gold' },
        { label: 'Business Loan', url: 'business' },
        { label: 'Loan Interest Rates', url: 'interest-rate' },
  ]
}
