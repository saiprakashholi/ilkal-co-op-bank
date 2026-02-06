import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-about-us',
  imports: [RouterModule, CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  // Controls sidebar visibility
  sidebarOpen = true;
  // Control accordion expansion for multiple top-level menu items
  execExpanded = true;
  financialsExpanded = false;

  private currentPageKey: 'directors' | 'founders' = 'directors';


  // mobile breakpoint (match scss)
  private mobileBreakpoint = 900;

  constructor(
    public lang: LanguageService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    // Ensure sidebar state matches route changes on mobile (close drawer after navigation)
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {

      if (e.url === '/about-us/directors') {
        this.currentPageKey = 'directors';
      } else if (e.url === '/about-us/founders') {
        this.currentPageKey = 'founders';
      }

      if (this.isMobile()) {
        this.sidebarOpen = false;
      }
    });



    // initial sidebar state based on window width
    this.sidebarOpen = !this.isMobile();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleExecutives() {
    this.execExpanded = !this.execExpanded;
  }

  toggleFinancials() {
    this.financialsExpanded = !this.financialsExpanded;
  }

  isMobile(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;  // server → no window
    return window.innerWidth <= this.mobileBreakpoint;
  }


  @HostListener('window:resize')
  onResize() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isMobile()) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  get pageTitle(): string {
    return this.lang.t('about-us', `${this.currentPageKey}.pageTitle`);
  }

  get pageBreadcrumb(): string {
    return this.lang.t('about-us', `${this.currentPageKey}.pageBreadcrumb`);
  }

  get sectionTitle(): string {
    return this.lang.t('about-us', `${this.currentPageKey}.sectionTitle`);
  }

}
