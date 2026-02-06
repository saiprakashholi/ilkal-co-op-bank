import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-saving',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving.html',
  styleUrl: './saving.scss',
})
export class Saving {
  constructor(
    public lang: LanguageService,
    private router: Router
  ) { }

  get benefits(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'benefits');
  }

  get eligibility(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'eligibility');
  }

  get photos(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'documents.photos');
  }

  get mandatoryDocs(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'documents.mandatory');
  }

  get addressProofDocs(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'documents.addressProof');
  }

  get identityProofDocs(): string[] {
    return this.lang.tArray<string>('deposits.saving', 'documents.identityProof');
  }

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
