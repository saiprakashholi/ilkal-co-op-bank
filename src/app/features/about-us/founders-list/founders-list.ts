import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

interface Founder {
  id: number;
  name: string;
  photo: string;
  designation?: string;
}

@Component({
  selector: 'app-founders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './founders-list.html',
  styleUrls: ['./founders-list.scss'],
})
export class FoundersList {
  constructor(public lang: LanguageService) { }

  get description(): string {
    return this.lang.t('about-us.founders-list', 'description');
  }

  get founders(): Founder[] {
    return this.lang.tArray<Founder>('about-us.founders-list', 'members');
  }

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.src = this.lang.t('about-us.founders-list', 'placeholderImage');
  }
}
