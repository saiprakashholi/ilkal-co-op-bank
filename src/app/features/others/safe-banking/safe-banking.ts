import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

interface SafetyItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-safe-banking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './safe-banking.html',
  styleUrl: './safe-banking.scss'
})
export class SafeBanking {
  constructor(public lang: LanguageService) { }

  get safetyTips(): SafetyItem[] {
    return this.lang.tArray<SafetyItem>('others.safe-banking', 'safetyTips');
  }

  get importantNotices(): SafetyItem[] {
    return this.lang.tArray<SafetyItem>('others.safe-banking', 'importantNotices');
  }

  get additionalSafety(): SafetyItem[] {
    return this.lang.tArray<SafetyItem>('others.safe-banking', 'additionalSafety');
  }
}
