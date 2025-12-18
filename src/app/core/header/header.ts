import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ IMPORTANT
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  mobileMenuOpen = false;

  menu = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about-us' },
    { label: 'Reports', url: '/agm' },
    { label: 'Deposits', url: '/deposits' },
    { label: 'Loans', url: '/loans' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Locations', url: '/locations' },
    { label: 'Contact Us', url: '/contact-us' },
  ];

  constructor(private router: Router) {}

  isActive(url: string): boolean {
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
  }
}
