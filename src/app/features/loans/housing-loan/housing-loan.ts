import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-housing-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-loan.html',
  styleUrl: './housing-loan.scss',
})
export class HousingLoan {
  constructor(
    public lang: LanguageService,
    private router: Router
  ) {}

  get highlights(): Array<{ label: string; value: string }> {
    return this.lang.tArray<{ label: string; value: string }>(
      'loans.housing',
      'highlights'
    );
  }

  get useCases(): string[] {
    return this.lang.tArray<string>('loans.housing', 'useCases');
  }

  // ACCORDION STATE
  openSection: 'eligibility' | 'documents' | 'charges' | null = 'eligibility';

  toggle(section: any, el?: HTMLElement) {
    this.openSection = this.openSection === section ? null : section;

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  get eligibilitySalaried(): string[] {
    return this.lang.tArray<string>('loans.housing', 'eligibility.salaried');
  }

  get eligibilityBusiness(): string[] {
    return this.lang.tArray<string>('loans.housing', 'eligibility.business');
  }

  get eligibilityCoApplicant(): string[] {
    return this.lang.tArray<string>('loans.housing', 'eligibility.coApplicant');
  }

  get documents(): string[] {
    return this.lang.tArray<string>('loans.housing', 'documents');
  }

  get security(): string[] {
    return this.lang.tArray<string>('loans.housing', 'security');
  }

  get chargesNote(): string {
    return this.lang.t('loans.housing', 'chargesNote');
  }

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
