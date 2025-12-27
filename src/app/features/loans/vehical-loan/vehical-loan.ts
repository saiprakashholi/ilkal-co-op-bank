import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehical-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehical-loan.html',
  styleUrl: './vehical-loan.scss',
})
export class VehicalLoan {

  hero = {
    title: 'Vehicle Loan',
    subtitle: 'Finance your two or four wheeler with ease',
    icon: '🚗',
    description:
      'A Vehicle Loan helps you purchase new or used two-wheelers and four-wheelers with affordable EMIs and flexible repayment terms.',
  };

  overview = [
    { label: 'Eligible Applicant', value: 'Individuals (Single/Joint), Firms, Legal Entities' },
    { label: 'Purpose', value: 'Purchase of New / Used Vehicle (not more than 5 years old)' },
    { label: 'Loan Amount', value: 'Up to 70% of vehicle cost' },
    { label: 'Repayment Period', value: 'Up to 24 Months' },
  ];

  features = [
    'Loan amount financed up to 70% of vehicle value',
    'Fixed repayment tenure of up to 24 months',
    'Interest rate applicable as per bank norms',
    'EMI-based repayment structure',
    'Quick processing with simple documentation',
  ];

  security = [
    'Hypothecation of the vehicle',
    'Two acceptable guarantors required',
    'If loan amount exceeds ₹25 Lakhs, immovable property security is mandatory',
  ];

  charges = [
    'Processing fee as per bank norms',
    'Share holding of 2.5% of the loan amount',
    'Insurance of the vehicle to be assigned in favour of the bank',
  ];

  documents = [
    'Duly filled loan application form',
    'Pro-forma invoice from authorized vehicle dealer',
    'Identity and address proof of applicant(s)',
    'Income proof of applicant(s) and guarantor(s)',
    'Any other documents as required by the bank',
  ];
}
