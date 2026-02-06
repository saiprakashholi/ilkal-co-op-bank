import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

interface Founder {
  id: number;
  name: string;
  photo: string;
  designation?: string;
}

@Component({
  selector: 'app-directors-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directors-list.html',
  styleUrl: './directors-list.scss',
})
export class DirectorsList {

  constructor(public lang: LanguageService) { }

  get description(): string {
    return this.lang.t('about-us.directors-list', 'description');
  }

  get founders(): Founder[] {
    return this.lang.tArray<Founder>('about-us.directors-list', 'members');
  }

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.src = this.lang.t('about-us.directors-list', 'placeholderImage');
  }
}
