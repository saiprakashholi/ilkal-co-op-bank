import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnnouncementsComponent } from "./components/announcements/announcements.component";
import { Header } from '../../core/header/header';
import { NoticeComponent } from './components/notice/notice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnnouncementsComponent, NoticeComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  public notice = 'Introduced Mobile Banking App. | Bank is Live on IMPS & UPI';
  
  public menu = ['Home','About Us','Agriculture Finance','Corporate Banking','Retail Banking','Mobile Banking','Gallery','Locations','Contact Us'];
  
  
  public mobileMenuOpen = false;
  // public innerWidth = 1200;

  currentYear: number = new Date().getFullYear();

  constructor() {
    // this.innerWidth = window.innerWidth;
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

 
}
