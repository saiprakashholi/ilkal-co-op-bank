import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

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
    address: `Ward No. 02, Near Basavangudi Ilkal - 587125
Dist: Bagalakot,
Karnataka, India`,
    mobiles: ['+91 9538868030'],
    landline: '',
    IFSC: 'UTIB0SICB25',

    gstNo: '29AAAAI0212P2ZO',
    bankRegNo: '22530 (24-08-1965)',
    rbiLicenceNo: 'UBD/K.A.P/721 (08-12-1986)',

    email: ['admin@ilkalcoopbank.com', 'ilkalcoop@hotmail.com'],
    website: 'https://ilkalcoopbank.com/',

    mapLink: 'https://maps.app.goo.gl/rC4ukBmdHf5oecYk7',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d221.33278889677794!2d76.11376566414671!3d15.960396026548803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDU3JzM3LjIiTiA3NsKwMDYnNDkuNiJF!5e1!3m2!1sen!2sin!4v1766080977076!5m2!1sen!2sin',
  };

  workingHours = {

    // weekdays: '10:30 AM – 4:30 PM',

    weekdaysBeforeLunch: "10:30 AM - 2:30 PM",
    weekdaysAfterLunch: "3:30 PM - 4:30 PM",

    holidays: [
      'Sunday',
      '2nd Saturday',
      '4th Saturday',
      'All Government Holidays',
    ],
  };

  mapSafeUrl!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    public lang: LanguageService
  ) {
    this.mapSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.bank.mapEmbed
    );
  }
}
