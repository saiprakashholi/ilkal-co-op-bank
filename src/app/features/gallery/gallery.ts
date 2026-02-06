import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhotoListComponent } from "./photo-list/photo-list";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PhotoListComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})

export class Gallery {

  constructor(public lang: LanguageService) { }

  get groups(): Array<{ id: number; name: string; description?: string; photos: string[] }> {
    return this.lang.tArray<{ id: number; name: string; description?: string; photos: string[] }>(
      'gallery.gallery',
      'groups'
    );
  }

  // gallery.ts (inside class)
  getCoverLeft(group: any): string {
    return (group.photos && group.photos.length > 0)
      ? group.photos[0]
      : this.lang.t('gallery.gallery', 'placeholderImage');
  }

  getCoverRight(group: any): string {
    return (group.photos && group.photos.length > 1)
      ? group.photos[1]
      : this.getCoverLeft(group);
  }

  // encoded versions for safe CSS url(...) and <img src="">
  getEncoded(url: string): string {
    return encodeURI(url); // global function, turns spaces -> %20
  }


  selectedGroup: any = null;

  openGroup(group: any) {
    console.log('Opening group:', group);
    this.selectedGroup = group;
  }

  closeModal() {
    this.selectedGroup = null;
  }

}
