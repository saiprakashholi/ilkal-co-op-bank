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

  hasUrl(doc: DownloadItem): boolean {
    return !!doc.url?.trim();
  }

  viewUrl(doc: DownloadItem): string {
    return this.hasUrl(doc) ? this.toBrowserViewUrl(doc.url!) : '#';
  }

  downloadUrl(doc: DownloadItem): string {
    return this.hasUrl(doc) ? this.toFileUrl(doc.url!) : '#';
  }

  onDocumentClick(event: MouseEvent, doc: DownloadItem): void {
    if (!this.hasUrl(doc)) {
      event.preventDefault();
    }
  }

  private toBrowserViewUrl(url: string): string {
    const fileUrl = this.toFileUrl(url);

    if (this.isExternalUrl(fileUrl) && this.isPdfUrl(fileUrl)) {
      return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl)}`;
    }

    return fileUrl;
  }

  private toFileUrl(url: string): string {
    return encodeURI(url.trim());
  }

  private isExternalUrl(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }

  private isPdfUrl(url: string): boolean {
    return /\.pdf($|[?#])/i.test(url);
  }

}
