import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ChargeRow {
  no?: number;
  details: string;
  charge: string;
}

interface ChargeSection {
  title: string;
  rows: ChargeRow[];
}

@Component({
  selector: 'app-service-charges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-charges.html',
  styleUrls: ['./service-charges.scss'],
})
export class ServiceCharges {
  sections: ChargeSection[] = [
    {
      title: 'Incidental Charges',
      rows: [
        { no: 1, details: 'Incidental Charges for Current Operative accounts', charge: '₹1,000 + GST (Per Year)' },
        { no: 2, details: 'Incidental Charges for Current In-operative accounts', charge: 'Nil' },
        { no: 3, details: 'Incidental Charges for SB Operative (Non-Cheque holder)', charge: '₹200 + GST (Per Year)' },
        { no: 4, details: 'Incidental Charges for SB Operative (Cheque holder)', charge: '₹200 + GST (Per Year)' },
        { no: 5, details: 'Incidental Charges for SB In-operative (Non-Cheque holder)', charge: 'Nil' },
        { no: 6, details: 'Incidental Charges for SB In-operative (Cheque holder)', charge: 'Nil' },
      ],
    },
    {
      title: 'Charges for Closure of Accounts (Normal Accounts)',
      rows: [
        { no: 7, details: 'Closing of Account SB Operative', charge: '₹50 + GST (Per Year)' },
        { no: 8, details: 'Closing of Account SB In-operative', charge: '₹50 + GST (Per Year)' },
        { no: 9, details: 'Closing of Account Current Operative', charge: '₹100 + GST (Per Year)' },
        { no: 10, details: 'Closing of Account Current In-operative', charge: '₹100 + GST (Per Year)' },
      ],
    },
    {
      title: 'Card Charges',
      rows: [
        { no: 11, details: 'EMV Debit Card Charges for all SB & Current accounts', charge: '₹150 + GST (One Time)' },
        { no: 12, details: 'Additional / Replacement EMV Debit Card', charge: '₹150 + GST (One Time)' },
        { no: 13, details: 'PIN Regeneration Charges', charge: '₹50 + GST (One Time)' },
        { no: 14, details: 'Transaction fees at MPS Bank ATM', charge: 'Nil' },
        {
          no: 15,
          details: 'Transaction fees at other Bank ATM',
          charge: '14 free transactions in Metro cities, 5 free in Non-Metro cities',
        },
        { no: 16, details: 'Financial (Cash Withdrawal) – after free limit', charge: '₹20 (Including GST)' },
        { no: 17, details: 'Non-financial (Balance enquiry, Mini statement, PIN change)', charge: '₹10 (Including GST)' },
      ],
    },
    {
      title: 'Debit Card Limits',
      rows: [
        { no: 18, details: 'Cash Withdrawal limit per day (EMV Debit Card)', charge: '₹24,000' },
        { no: 19, details: 'Purchase transaction limit per day', charge: '₹1,00,000' },
        { no: 20, details: 'IMPS Mobile Banking outward transaction limit per day', charge: '₹5,00,000' },
      ],
    },
    {
      title: 'RTGS / NEFT',
      rows: [{ no: 21, details: 'RTGS / NEFT Charges', charge: 'Nil' }],
    },
    {
      title: 'SMS Charges',
      rows: [
        { no: 22, details: 'SMS Charges for SB / CA account holders', charge: '₹10 + GST (Quarterly)' },
        { no: 23, details: 'SMS Charges for CA / OD / CCL account holders', charge: '₹25 + GST (Quarterly)' },
      ],
    },
    {
      title: 'Cheque Book Charges',
      rows: [{ no: 24, details: 'Cheque Book charges (all account types)', charge: '₹2 + GST (Per Leaf)' }],
    },
  ];

  impsCharges = [
    { from: '₹1', to: '₹5,000', charge: '₹1.18' },
    { from: '₹5,001', to: '₹10,000', charge: '₹5.90' },
    { from: '₹10,001', to: '₹25,000', charge: '₹11.80' },
    { from: '₹25,001', to: '₹50,000', charge: '₹23.60' },
    { from: '₹50,001', to: '₹1 Lakh', charge: '₹29.50' },
    { from: '₹1 Lakh', to: '₹5 Lakhs', charge: '₹41.30' },
  ];
}
