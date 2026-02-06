import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';

export interface Announcement {
  id: number;
  title: string;
  href?: string;
  highlight?: boolean;
  date?: string;
}

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {
  /** Optional input: override default announcements */
  @Input() announcements: Announcement[] = [];

  constructor(public lang: LanguageService) { }

  get items(): Announcement[] {
    return this.announcements.length
      ? this.announcements
      : this.lang.tArray<Announcement>('home.announcements', 'items');
  }

  // sanitize simple href usage: open external links in new tab
  isExternal(href?: string) {
    return !!href && (href.startsWith('http://') || href.startsWith('https://'));
  }
}
