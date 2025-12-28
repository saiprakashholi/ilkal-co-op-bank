import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-imps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imps.html',
  styleUrl: './imps.scss',
})
export class Imps {

  constructor(public lang: LanguageService) {}

  features = [
    'REAL_TIME',
    'ROUND_THE_CLOCK',
    'INSTANT_CREDIT',
    'INTERBANK',
    'MAX_LIMIT'
  ];
}
