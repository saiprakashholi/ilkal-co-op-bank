import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
  expanded?: boolean; // mobile accordion
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  mobileMenuOpen = false;

  menu: MenuItem[] = [
    { label: 'Home', url: '/' },

    {
      label: 'About Us',
      url: '/about-us',
      expanded: false,
      children: [
        { label: 'Founders', url: '/about-us/founders' },
        { label: 'Board of Directors', url: '/about-us/directors' },
        { label: 'Key Indicators', url: '/agm' },
      ],
    },

    {
      label: 'Services',
      url: '/service',
      expanded: false,
      children: [
        { label: 'UPI', url: '/service/upi' },
        { label: 'IMPS', url: '/service/imps' },
        { label: 'ATM', url: '/service/atm' },
        { label: 'RTGS/NEFT', url: '/service/rtgs-neft' },
        { label: 'Locker', url: '/service/locker' },
        { label: 'Mobile Banking', url: '/service/mobile' },

      ],
    },


    { label: 'Reports', url: '/agm' },
    {
      label: 'Deposits',
      url: '/deposits',
      expanded: false,
      children: [
        { label: 'Savings Deposits', url: '/deposits/saving' },
        { label: 'Current Deposits', url: '/deposits/current' },
        { label: 'Deposit Interest Rates', url: '/deposits/interest-rate' },
      ],
    },
    {
      label: 'Loans',
      url: '/loans',
      expanded: false,
      children: [
        { label: 'Personal Loan', url: '/loans/personal' },
        { label: 'Housing Loan', url: '/loans/housing' },
        { label: 'Vehicle Loan', url: '/loans/vehical' },
        { label: 'Gold Loan', url: '/loans/gold' },
        { label: 'Business Loan', url: '/loans/business' },
        { label: 'Loan Interest Rates', url: '/loans/interest-rate' },
      ],
    },
    { label: 'Gallery', url: '/gallery' },
    {
      label: 'Others', url: '/others',
      expanded: false,
      children: [
        { label: 'Service Charges', url: '/others/service-charges' },
        { label: 'Secure and Safe Banking', url: '/others/safe-banking' },
        { label: 'Downloads', url: '/others/download' },
        { label: 'AGM', url: '/others/agm' },
      ],
    },
    { label: 'Branches', url: '/locations' },
    { label: 'Contact Us', url: '/contact-us' },
  ];

  constructor(private router: Router, public lang: LanguageService) { }


  isActive(url?: string): boolean {
    if (!url) return false;

    if (url === '/') {
      return this.router.isActive('/', {
        paths: 'exact',
        queryParams: 'ignored',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
    }

    return this.router.isActive(url, {
      paths: 'subset',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
    this.menu.forEach(m => (m.expanded = false));
  }

  toggleAccordion(item: MenuItem): void {
    item.expanded = !item.expanded;
  }
}
