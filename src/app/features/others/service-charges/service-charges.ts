import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

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
  constructor(public lang: LanguageService) { }

  get sections(): ChargeSection[] {
    return this.lang.tArray<ChargeSection>('others.service-charges', 'sections');
  }

  get impsCharges(): Array<{ from: string; to: string; charge: string }> {
    return this.lang.tArray<{ from: string; to: string; charge: string }>(
      'others.service-charges',
      'impsCharges'
    );
  }

  get impsNote(): string {
    return this.lang.t('others.service-charges', 'impsNote');
  }
}
