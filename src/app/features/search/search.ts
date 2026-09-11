import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface SearchEntry {
  title: string;
  description: string;
  url: string;
  keywords: string[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  query = '';

  constructor(public lang: LanguageService) {}

  get popularSearches(): string[] {
    return this.lang.tArray<string>('search', 'popularSearches');
  }

  get entries(): SearchEntry[] {
    return this.lang.tArray<SearchEntry>('search', 'entries');
  }

  get results(): SearchEntry[] {
    const term = this.normalizedQuery;
    if (!term) return this.entries.slice(0, 8);

    return this.entries
      .map(entry => ({ entry, score: this.scoreEntry(entry, term) }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(result => result.entry);
  }

  get normalizedQuery(): string {
    return this.query.trim().toLowerCase();
  }

  searchFor(term: string): void {
    this.query = term;
  }

  private scoreEntry(entry: SearchEntry, term: string): number {
    const title = entry.title.toLowerCase();
    const description = entry.description.toLowerCase();
    const keywords = entry.keywords.join(' ').toLowerCase();

    let score = 0;
    if (title.includes(term)) score += 8;
    if (keywords.includes(term)) score += 6;
    if (description.includes(term)) score += 3;

    const terms = term.split(/\s+/).filter(Boolean);
    terms.forEach(part => {
      if (title.includes(part)) score += 3;
      if (keywords.includes(part)) score += 2;
      if (description.includes(part)) score += 1;
    });

    return score;
  }
}
