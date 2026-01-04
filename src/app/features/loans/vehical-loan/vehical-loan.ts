import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-vehical-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehical-loan.html',
  styleUrl: './vehical-loan.scss',
})
export class VehicalLoan {
  constructor(public lang: LanguageService) {}

  hero = {
    iconPath: 'assets/icons/vehicle-loan.svg',
  };

  twoWheeler = {
    overview: [
      { key: 'eligible', valueKey: 'two.eligible' },
      { key: 'purpose', valueKey: 'two.purpose' },
      { key: 'amount', valueKey: 'two.amount' },
      { key: 'repayment', valueKey: 'two.repayment' },
    ],
    featuresKey: 'two.features',
  };

  fourWheeler = {
    overview: [
      { key: 'eligible', valueKey: 'four.eligible' },
      { key: 'purpose', valueKey: 'four.purpose' },
      { key: 'amount', valueKey: 'four.amount' },
      { key: 'repayment', valueKey: 'four.repayment' },
    ],
    featuresKey: 'four.features',
  };

  documentsKey = 'documents';
}
