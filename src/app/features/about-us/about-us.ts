import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';


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

  pageTitle = "List of the Board of Directors";
  pageBreadcrumb = "About Us / Executives / Board of Directors";
  sectionTitle = "List of the Board of Directors of Bank are as under";


  // mobile breakpoint (match scss)
  private mobileBreakpoint = 900;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    // Ensure sidebar state matches route changes on mobile (close drawer after navigation)
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {

      if (e.url === '/about-us/directors') {
        this.pageTitle = "List of the Board of Directors";
        this.pageBreadcrumb = "About Us / Executives / Board of Directors";
        this.sectionTitle = "List of the Board of Directors of Bank are as under";
      } else if (e.url === '/about-us/founders') {
        this.pageTitle = "List of the Founders";
        this.pageBreadcrumb = "About Us / Executives / Founders";
        this.sectionTitle = "List of the Founders of Bank are as under";
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

}
