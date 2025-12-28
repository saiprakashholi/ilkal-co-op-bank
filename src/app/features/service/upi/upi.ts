import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-upi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upi.html',
  styleUrl: './upi.scss',
})
export class Upi {

  constructor(public lang: LanguageService) {}

  /** Bullet points – structure only */
  methods = ['VPA', 'MOBILE', 'ACCOUNT_IFSC', 'QR'];

  prerequisites = [
    'BANK_ACCOUNT',
    'MOBILE_LINKED',
    'SMARTPHONE',
    'DEBIT_CARD'
  ];
}
