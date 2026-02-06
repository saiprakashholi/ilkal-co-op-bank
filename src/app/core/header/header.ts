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

  get menu(): MenuItem[] {
    return this.lang.tArray<MenuItem>('core.header', 'menu');
  }

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
