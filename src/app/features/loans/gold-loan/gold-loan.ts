import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-gold-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gold-loan.html',
  styleUrl: './gold-loan.scss',
})
export class GoldLoan {
  constructor(public lang: LanguageService) {}
}
