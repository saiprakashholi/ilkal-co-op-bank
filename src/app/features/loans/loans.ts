import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './loans.html',
  styleUrl: './loans.scss',
})
export class Loans {
  constructor(public lang: LanguageService) { }

  get list() {
    return this.lang.tArray<{ label: string; url: string }>('loans', 'list');
  }
}
