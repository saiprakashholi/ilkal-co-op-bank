import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  public mobileMenuOpen = false;
  public searchOpen = false;

  public menu: MenuItem[] = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about-us' },
    // { label: 'Agriculture Finance', url: '/agri' },
    // { label: 'Corporate Banking', url: '/corporate' },
    // { label: 'Retail Banking', url: '/retail' },
    // { label: 'Mobile Banking', url: '/mobile-banking' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Locations', url: '/locations' },
    { label: 'Contact Us', url: '/contact-us' }
  ];

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 900 && this.mobileMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    const ke = event as KeyboardEvent;
    if (ke.key === 'Escape' || ke.key === 'Esc') {
      if (this.mobileMenuOpen) this.closeMenu();
      if (this.searchOpen) this.searchOpen = false;
    }
  }
}
