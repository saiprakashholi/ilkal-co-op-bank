import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-presidents-list',
  imports: [CommonModule],
  templateUrl: './presidents-list.html',
  styleUrl: './presidents-list.scss',
})
export class PresidentsList {
  constructor(public lang: LanguageService) { }

  get description(): string {
    return this.lang.t('about-us.presidents-list', 'description');
  }
}
