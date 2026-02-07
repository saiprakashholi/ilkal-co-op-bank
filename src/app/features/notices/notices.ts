import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface NoticeItem {
  text: string;
  url?: string;
  newTab?: boolean;
  date?: string;
}

interface AnnouncementItem {
  id: number;
  title: string;
  href?: string;
  highlight?: boolean;
  date?: string;
}

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.html',
  styleUrl: './notices.scss',
})
export class Notices {
  constructor(public lang: LanguageService) { }

  get items(): NoticeItem[] {
    return this.lang.tArray<NoticeItem>('home.notice', 'items');
  }

  get announcements(): AnnouncementItem[] {
    return this.lang.tArray<AnnouncementItem>('home.announcements', 'items');
  }

  isExternal(href?: string) {
    return !!href && (href.startsWith('http://') || href.startsWith('https://'));
  }
}
