import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-personal-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-loan.html',
  styleUrl: './personal-loan.scss',
})
export class PersonalLoan {
  constructor(
    public lang: LanguageService,
    private router: Router
  ) { }

  get highlights(): Array<{ label: string; value: string; valueLabel?: string }> {
    return this.lang.tArray<{ label: string; value: string; valueLabel?: string }>(
      'loans.personal',
      'highlights'
    );
  }

  get useCases(): string[] {
    return this.lang.tArray<string>('loans.personal', 'useCases');
  }

  // ACCORDION STATE
  openSection: 'eligibility' | 'documents' | 'charges' | null = 'eligibility';

  toggle(section: 'eligibility' | 'documents' | 'charges', el?: HTMLElement) {
    this.openSection = section;

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }



  get eligibilitySalaried(): string[] {
    return this.lang.tArray<string>('loans.personal', 'eligibility.salaried');
  }

  get eligibilityBusiness(): string[] {
    return this.lang.tArray<string>('loans.personal', 'eligibility.business');
  }

  get guarantors(): string[] {
    return this.lang.tArray<string>('loans.personal', 'guarantors');
  }

  get documents(): string[] {
    return this.lang.tArray<string>('loans.personal', 'documents');
  }

  get chargesNote(): string {
    return this.lang.t('loans.personal', 'chargesNote');
  }

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
