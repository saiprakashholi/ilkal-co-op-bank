import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhotoListComponent } from "./photo-list/photo-list";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PhotoListComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})

export class Gallery {

  groups = [
    {
      id: 1,
      name: 'Branch Opening Ceremony',
      description: 'Inauguration of our new branch with esteemed guests and community members.',
      // cover: '/assets/gallery/1/1.gm.jpeg',
      photos: [
        '/assets/gallery/1/1.gm.jpeg',
        '/assets/gallery/1/2.gm.jpeg',
        '/assets/gallery/1/3.gm.jpeg',
      ]
    },
    {
      id: 2,
      name: 'Prize Distribution',
      description: 'Prize Distribution in our new branch with esteemed guests.',
      photos: [
        '/assets/gallery/2/others Prize.jpg',
        '/assets/gallery/2/1st Prize.jpg',
        '/assets/gallery/2/3rd Prize Group Photo.jpg',
        '/assets/gallery/2/3rd Prize.jpg',
        '/assets/gallery/2/Good Performance Prize Group Photo.jpg',
        '/assets/gallery/2/Good Performance Prize.jpg',
        '/assets/gallery/2/others Prize.jpg',

      ]
    },
    {
      id: 3,
      name: 'General Meetings',
      description: 'Inauguration of our new branch with esteemed guests and community members.',
      // cover: '/assets/gallery/1/1.gm.jpeg',
      photos: [
        '/assets/gallery/2/Good Performance Prize.jpg',
        '/assets/gallery/1/1.gm.jpeg',
        '/assets/gallery/1/2.gm.jpeg',

      ]
    },
    {
      id: 4,
      name: 'Staff Events',
      description: 'Inauguration of our new branch with esteemed guests and community members.',
      // cover: '/assets/gallery/1/1.gm.jpeg',
      photos: [
        '/assets/gallery/2/Good Performance Prize.jpg',
        '/assets/gallery/1/3.gm.jpeg',
        '/assets/gallery/1/1.gm.jpeg',
        '/assets/gallery/1/2.gm.jpeg',

      ]
    }
  ];

  // gallery.ts (inside class)
  getCoverLeft(group: any): string {
    return (group.photos && group.photos.length > 0)
      ? group.photos[0]
      : '/assets/placeholder.jpg';
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
