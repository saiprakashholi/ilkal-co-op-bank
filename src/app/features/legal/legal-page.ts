import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';

type LegalDocumentType = 'terms' | 'privacy';

interface LegalSection {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
}

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage implements OnInit {
  documentType: LegalDocumentType = 'terms';

  constructor(
    private route: ActivatedRoute,
    public lang: LanguageService
  ) { }

  get moduleName(): string {
    return this.documentType === 'privacy' ? 'legal.privacy' : 'legal.terms';
  }

  get title(): string {
    return this.lang.t(this.moduleName, 'title');
  }

  get subtitle(): string {
    const value = this.lang.t(this.moduleName, 'subtitle');
    return value === 'subtitle' ? '' : value;
  }

  get updatedOn(): string {
    const value = this.lang.t(this.moduleName, 'updatedOn');
    return value === 'updatedOn' ? '' : value;
  }

  get sections(): LegalSection[] {
    return this.lang.tArray<LegalSection>(this.moduleName, 'sections');
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.documentType = data['documentType'] as LegalDocumentType;
    });
  }
}
