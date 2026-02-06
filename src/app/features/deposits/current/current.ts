import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current.html',
  styleUrl: './current.scss',
})
export class Current {
  constructor(
    public lang: LanguageService,
    private router: Router
  ) { }

  get benefits(): string[] {
    return this.lang.tArray<string>('deposits.current', 'benefits');
  }

  get eligibility(): string[] {
    return this.lang.tArray<string>('deposits.current', 'eligibility');
  }

  get photos(): string[] {
    return this.lang.tArray<string>('deposits.current', 'documents.photos');
  }

  get mandatoryDocs(): string[] {
    return this.lang.tArray<string>('deposits.current', 'documents.mandatory');
  }

  get addressProofDocs(): string[] {
    return this.lang.tArray<string>('deposits.current', 'documents.addressProof');
  }

  get identityProofDocs(): string[] {
    return this.lang.tArray<string>('deposits.current', 'documents.identityProof');
  }

  goToBranches() {
    this.router.navigate(['/locations']);
  }
}
