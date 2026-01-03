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
        // { label: 'SGH-JLG Loan', url: 'sgh-jlg' },
        { label: 'Vehicle Loan', url: 'vehical' },
        { label: 'Gold Loan', url: 'gold' },
        { label: 'Business Loan', url: 'business' },
        { label: 'Term Loan', url: 'term' },
        { label: 'Loan Interest Rates', url: 'interest-rate' },
  ]
}
