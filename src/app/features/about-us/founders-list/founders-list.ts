import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  description = 'Our founders envisioned a cooperative institution built on trust, service, and community progress. Their dedication and leadership continue to inspire our journey toward financial inclusion and growth.';
  
  founders: Founder[] = [
    { id: 1, name: 'R V Kalagi', photo: 'assets/foundersPhotos/2.KALAGI.JPG', designation: 'Founder' },
    { id: 2, name: 'G M Pattanashetti', photo: 'assets/foundersPhotos/1.PATTANSHATTI.JPG'},
    { id: 3, name: 'G K Medikere', photo: 'assets/foundersPhotos/3.Meddikeri.JPG'},
    { id: 4, name: 'V C Akki', photo: 'assets/foundersPhotos/4.AKKI.JPG'},
    { id: 5, name: 'N O Aralikatti', photo: 'assets/foundersPhotos/5.ARALIKATTI.JPG'},
    { id: 6, name: 'M M Japagal', photo: 'assets/foundersPhotos/6.JAPAGAL.JPG'},
    { id: 7, name: 'M M Bora', photo: 'assets/foundersPhotos/7.BORA.JPG'},
    { id: 8, name: 'A M Kutagamari', photo: 'assets/foundersPhotos/8.KUTAGAMRRI.JPG'},
    { id: 9, name: 'N R Sapparad', photo: 'assets/foundersPhotos/9.SAPARAD.JPG'},
    { id: 10, name: 'N V Mannapur', photo: 'assets/foundersPhotos/10.MANAPUR.JPG'},
    { id: 11, name: 'N A Tapadiya', photo: 'assets/foundersPhotos/11.TAPADIYA.JPG'},
  ];

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/600x600?text=No+Image';
  }
}
