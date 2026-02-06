import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-fin-key-indicators',
  imports: [CommonModule],
  templateUrl: './fin-key-indicators.html',
  styleUrl: './fin-key-indicators.scss',
})
export class FinKeyIndicators {
  constructor(public lang: LanguageService) { }

}
