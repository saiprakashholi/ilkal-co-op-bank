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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.214768815273!2d76.1097162751337!3d15.966609384698085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb80c943a00dead%3A0x3fa80c6f3154faf2!2sIlkal%20Co%20Operative%20Bank!5e1!3m2!1sen!2sin!4v1765997047862!5m2!1sen!2sin",
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
