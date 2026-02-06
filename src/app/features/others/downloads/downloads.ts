import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

interface DownloadItem {
  title: string;
  url?: string;
}

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads.html',
  styleUrl: './downloads.scss'
})
export class Downloads {
  constructor(public lang: LanguageService) { }

  get downloads(): DownloadItem[] {
    return this.lang.tArray<DownloadItem>('others.downloads', 'items');
  }
}
