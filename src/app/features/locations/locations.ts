import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface Branch {
  name?: string;
  address?: string;
  phone?: string;
  image?: string;
  location?: string;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.html',
  styleUrl: './locations.scss',
})
export class Locations {
  constructor(public lang: LanguageService) { }

  get branches(): Branch[] {
    return this.lang.tArray<Branch>('locations.locations', 'branches');
  }

  get fallbackImage(): string {
    return this.lang.t('locations.locations', 'fallbackImage');
  }
}
