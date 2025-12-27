import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sgh-jlg-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sgh-jlg-loan.html',
  styleUrl: './sgh-jlg-loan.scss',
})
export class SghJlgLoan {

  hero = {
    title: 'SHG / JLG Loans',
    subtitle: 'Financial support for self-help groups, joint liability groups and small businesses',
    icon: '🤝',
    description:
      'These loans are designed to support agri-allied activities, non-farm small businesses and Self Help Groups (SHGs), enabling income generation and financial inclusion.',
  };

  agriAllied = {
    title: 'Agri Allied Loan',
    description:
      'Term loan for development of agri allied activities such as Dairy, Fisheries, and Sheep / Goat rearing.',
    features: [
      'Loan Limit: Maximum up to ₹50,000',
      'Total Repayment Tenure: 2 Years',
      'No Pre-payment Penalty',
      'Rate of Interest: 20%',
      'Service Charges: Applicable as per bank norms',
      'Margin: As applicable',
    ],
  };

  nonFarm = {
    title: 'Non-Farm Sector Loan',
    description:
      'Loan assistance to different kinds of small businesses and roadside vendors.',
    features: [
      'Loan Limit: Maximum up to ₹50,000',
      'Total Repayment Tenure: 2 Years',
      'No Pre-payment Penalty',
      'Rate of Interest: 24%',
      'Service Charges: Applicable as per bank norms',
      'Margin: As applicable',
    ],
  };

  shg = {
    title: 'Self Help Group (SHG) Loan',
    description:
      'Self Help Groups (SHGs) are small groups of people who promote savings among members and provide small loans from a common fund maintained with the bank. Registration under any Act is not mandatory as per RBI circular dated July 24, 1991.',
    features: [
      'Loan Limit: Maximum up to ₹5.00 Lakhs',
      'Total Repayment Tenure: 2 Years',
      'No Pre-payment Penalty',
      'Rate of Interest: 21%',
      'Service Charges: Applicable as per bank norms',
      'Margin: As applicable',
    ],
  };

  documents = [
    'Duly filled loan application form',
    'Income proof of applicant(s) and guarantor(s)',
    'Residential proof of applicant(s) and guarantor(s)',
    'PAN Card of applicant(s) and guarantor(s)',
    'KYC documents of applicant(s) and guarantor(s)',
  ];
}
