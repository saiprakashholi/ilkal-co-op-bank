import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-deposits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service {

  constructor(public lang: LanguageService) { 
    console.log("Language Service in Service Component", lang.t('services', 'UPI') );
  }

  list = [
    { key: 'UPI', url: 'upi' },
    { key: 'IMPS', url: 'imps' },
    { key: 'ATM', url: 'atm' },
    { key: 'RTGS_NEFT', url: 'rtgs-neft' },
    { key: 'LOCKER', url: 'locker' },
    { key: 'MOBILE', url: 'mobile' },
  ];

}
