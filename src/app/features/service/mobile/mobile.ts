import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile.html',
  styleUrl: './mobile.scss',
})
export class Mobile {

  constructor(public lang: LanguageService) { }

  features = [
    'BALANCE_ENQUIRY',
    'FUND_TRANSFER',
    'BILL_PAYMENTS',
    'MINI_STATEMENT',
    'SECURE_ACCESS'
  ];

  downloads = [
    {
      key: 'ANDROID_APP',
      url: 'https://play.google.com/store/apps/details?id=in.sarvatra.ilkalcoop.mobilebanking'
    }
  ];


  documents = [
    {
      key: 'TERMS_CONDITIONS',
      viewUrl: '/assets/downloads/MobileBankingTermsConditions.pdf',
      downloadUrl: '/assets/downloads/MobileBankingTermsConditions.pdf'
    },
    {
      key: 'APP_POLICIES',
      viewUrl: '/assets/downloads/MobileBankAppPolicies.pdf',
      downloadUrl: '/assets/downloads/MobileBankAppPolicies.pdf'
    },
    {
      key: 'SECURE_USAGE',
      viewUrl: '/assets/downloads/MobileBankingSecureUsageGuidelines.pdf',
      downloadUrl: '/assets/downloads/MobileBankingSecureUsageGuidelines.pdf'
    }

  ];
}
