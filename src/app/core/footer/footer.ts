import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
// import { VisitorService } from '../../services/visitors.service';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  @Input() brandColor = '#3298cd';
  today = new Date();
  visitorsToday = 0;

  bankDetails = {
  name: 'Ilkal Co-Operative Bank Ltd.',
  address:
    'Near Basavangudi, Ilkal – 587125, Dist: Bagalakot, Karnataka, India',

  ifsc: 'UTIB0SICB25',

  workingHours: 'Monday – Saturday: 10:30 AM – 4:30 PM',

  gst: '29AAAAI1234A1Z5',
  bankRegNo: 'UB/KA/721 (08-12-1986)',
  rbiLicenceNo: '22530 (24-08-1965)',
  email: 'info@ilkalbank.com',
  website: 'https://www.ilkalbank.com',
};


  constructor(
    // private visitorSvc: VisitorService,
    public lang: LanguageService
  ) {}

  ngOnInit(): void {
    // this.visitorsToday = this.visitorSvc.incrementToday();
  }

  switchLang(l: 'en' | 'kn') {
    this.lang.loadLanguage(l);
  }
}
