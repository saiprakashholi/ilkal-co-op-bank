import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  bank = {
    name: 'Ilkal Co-Operative Bank Ltd.',
    place: 'Head Office – Ilkal',
    address: `Near Basavangudi Ilkal - 587125 
    Dist: Bagalakot, 
    Karnataka, India`,
    mobiles: ['+91 8351295325 ', '+91 9538868035'],
    landline: '',//'08351-123456',
    mapLink: 'https://www.google.com/maps?q=Ilkal+Co+Operative+Bank',
    mapEmbed:
      'https://www.google.com/maps?q=Ilkal+Co+Operative+Bank&output=embed',
  };

  workingHours = {
    weekdays: '10:00 AM – 5:00 PM',
    saturday: '10:00 AM – 1:00 PM',
    holidays: [
      'Sunday',
      '2nd Saturday',
      '4th Saturday',
      'All Government Holidays',
    ],
  };

  mapSafeUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.mapSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.bank.mapEmbed
    );
  }

}
