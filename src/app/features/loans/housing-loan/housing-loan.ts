import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-loan.html',
  styleUrl: './housing-loan.scss',
})
export class HousingLoan {
  constructor(private router: Router) {}

  // HERO
  hero = {
    title: 'Housing Loan',
    subtitle: 'Turn your dream of owning a home into reality',
    icon: '🏠',
    description:
      'We offer Home Loans and Home Construction Loans with simple documentation and flexible repayment options, helping you build your dream home with confidence.',
  };

  // QUICK FACTS
  highlights = [
    { label: 'Maximum Loan', value: '₹1.4 Crore' },
    { label: 'Repayment Period', value: 'Up to 15 Years' },
    { label: 'Interest Rate', value: '11% p.a.' },
    { label: 'Margin', value: '25%' },
  ];

  // USE CASES
  useCases = [
    // 'Purchase of residential house or flat',
    'Construction of a new house',
    'Purchase of under-construction property',
    'Long-term real estate investment',
  ];

  // ACCORDION STATE
  openSection: 'eligibility' | 'documents' | 'charges' | null = 'eligibility';

  toggle(section: any, el?: HTMLElement) {
    this.openSection = this.openSection === section ? null : section;

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  // ELIGIBILITY
  eligibility = {
    salaried: [
      'Employees of reputed and financially sound organizations',
      // 'Minimum gross take-home salary of ₹15,000 per month',
      'Confirmed service for at least one year',
    ],
    business: [
      'Business establishment of minimum three years',
    ],
    coApplicant: [
      'Co-owners of the dwelling unit must be taken as co-applicants',
      'Spouse or parents (other than co-owners) can also be co-applicants',
    ],
  };

  // DOCUMENTS
  documents = [
    'Duly filled loan application form',
    'Building Permission of Concern Authority',
    'Utilization Certificate',
    'Original Sale Deed Bond',
    'Income Tax Filling Return (Minimum 3 Years)',
    'Computer Utar',
    'Encumbrance Certificate (EC 30 Years)',
    // 'Plan and Estimation And Legal Opinion',
    'Income proof of applicant(s) and guarantor(s)',
    'Residential proof of applicant(s) and guarantor(s)',
    'PAN Card of applicant(s) and guarantor(s)',
    'KYC documents of applicant(s) and guarantor(s)',
    'Other Required Applicable Documents as per bank norms'
  ];

  // SECURITY & CHARGES
  security = [
    'Dwelling unit under construction or ready possession to be purchased',
    'Two acceptable guarantors required',
    'Security holders to be taken as guarantors',
  ];

  chargesNote =
    'Other applicable charges include upfront EMI, franking charges, CERSAI, mortgage filing, property insurance, legal charges, valuation and sanction confirmation (if applicable). Service charges may vary as per bank norms.';

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
