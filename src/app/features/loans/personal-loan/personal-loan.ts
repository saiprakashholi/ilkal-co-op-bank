import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-loan.html',
  styleUrl: './personal-loan.scss',
})
export class PersonalLoan {
  constructor(private router: Router) { }

  // HERO
  hero = {
    title: 'Personal Loan',
    subtitle: 'Quick financial support for your personal needs',
    icon: '💳',
    description:
      'An unsecured loan with minimal documentation and flexible repayment.',
  };

  // QUICK FACTS
  highlights = [
    { label: 'Maximum Amount', value: '₹5.00 Lakhs', valueLabel: '(10 Times of Basic Salary)' },
    { label: 'Tenure', value: '3 Years' },
    // { label: 'Collateral', value: 'Not Required' },
    { label: 'Prepayment', value: 'No Penalty' },
  ];

  // USE CASES
  useCases = [
    // 'Medical or emergency expenses',
    // 'Education or skill development',
    // 'Marriage or family functions',
    // 'Travel or personal commitments',
    // 'Any genuine personal financial need',
  ];

  // ACCORDION STATE
  openSection: 'eligibility' | 'documents' | 'charges' | null = 'eligibility';

  toggle(section: 'eligibility' | 'documents' | 'charges', el?: HTMLElement) {
    this.openSection = section;

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }



  // ELIGIBILITY
  eligibility = {
    salaried: [
      'Must be a member of the bank',
      'Employee of a reputed and financially sound organization',
      // 'Minimum gross take-home salary of ₹25,000 per month',
      'Confirmed service for at least one year',
      'Undertaking letter from employer',
    ],
    business: [
      'Must be a member of the bank',
      'Business establishment of minimum three years',
      'Statutory business documents such as GST registration',
    ],
  };

  // GUARANTORS
  guarantors = [
    'Two acceptable guarantors are mandatory',
    'Guarantors should be members of the bank',
    'Security holders may also be taken as guarantors',
  ];

  // DOCUMENTS
  documents = [
    'Duly filled loan application form',
    'Income proof of applicant(s) and guarantor(s)',
    'Residential proof of applicant(s) and guarantor(s)',
    'PAN Card of applicant(s) and guarantor(s)',
    'KYC documents of applicant(s) and guarantor(s)',
  ];

  chargesNote = 'Service charges and other fees are applicable as per bank norms';

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
