import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-rtgs-neft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rtgs-neft.html',
  styleUrl: './rtgs-neft.scss',
})
export class RtgsNeft {

  constructor(public lang: LanguageService) {}

  rtgsBenefits = [
    'RTGS_REAL_TIME',
    'RTGS_GROSS',
    'RTGS_FAST',
    'RTGS_SECURE'
  ];

  neftBenefits = [
    'NEFT_BATCH',
    'NEFT_WIDE_USAGE',
    'NEFT_CONVENIENT',
    'NEFT_SECURE'
  ];
}
