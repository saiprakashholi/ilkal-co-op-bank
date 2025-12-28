import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-atm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atm.html',
  styleUrl: './atm.scss',
})
export class Atm {

  constructor(public lang: LanguageService) {}

  features = [
    'CASH_WITHDRAWAL',
    'BALANCE_ENQUIRY',
    'MINI_STATEMENT',
    'PIN_CHANGE',
    'INTEROPERABLE'
  ];

  debitCardPoints = [
    'CARD_ISSUANCE',
    'BRANCH_COLLECTION',
    'ATM_USAGE',
    'SECURITY'
  ];
}
