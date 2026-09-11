import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from "@angular/router";
// import { VisitorService } from '../../services/visitors.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  @Input() brandColor = '#3298cd';
  today = new Date();
  visitorsToday = 0;

  get bankDetails(): {
    name: string;
    address: string;
    ifsc: string;
    workingHours: string;
    gst: string;
    bankRegNo: string;
    rbiLicenceNo: string;
    email: string;
    website: string;
  } {
    const details = this.lang.t('core.footer', 'bankDetails') as any;
    return {
      name: details?.name ?? '',
      address: details?.address ?? '',
      ifsc: details?.ifsc ?? '',
      workingHours: details?.workingHours ?? '',
      gst: details?.gst ?? '',
      bankRegNo: details?.bankRegNo ?? '',
      rbiLicenceNo: details?.rbiLicenceNo ?? '',
      email: details?.email ?? '',
      website: details?.website ?? '',
    };
  }

  get quickLinks(): Array<{ label: string; url: string }> {
    return this.lang.tArray<{ label: string; url: string }>('core.footer', 'quickLinks');
  }

  get retailLinks(): Array<{ label: string; url: string }> {
    return this.lang.tArray<{ label: string; url: string }>('core.footer', 'retailLinks');
  }

  get importantLinks(): Array<{ label: string; url: string }> {
    return this.lang.tArray<{ label: string; url: string }>('core.footer', 'importantLinks');
  }

  get resourceLinks(): Array<{ label: string; url: string; external?: boolean }> {
    return this.lang.tArray<{ label: string; url: string; external?: boolean }>('core.footer', 'resourceLinks');
  }

  get socialLinks(): Array<{ label: string; url: string; iconText: string }> {
    return this.lang.tArray<{ label: string; url: string; iconText: string }>('core.footer', 'socialLinks');
  }

  get storeBadges(): Array<{ qrImage: string; badgeImage: string; href: string; ariaLabel: string }> {
    return this.lang.tArray<{ qrImage: string; badgeImage: string; href: string; ariaLabel: string }>('core.footer', 'storeBadges');
  }

  get dicgc(): {
    href: string;
    ariaLabel: string;
    logoImage: string;
    logoAlt: string;
    qrImage: string;
    qrAlt: string;
    message: string;
  } {
    const dicgc = this.lang.t('core.footer', 'dicgc') as any;
    return {
      href: dicgc?.href ?? '',
      ariaLabel: dicgc?.ariaLabel ?? '',
      logoImage: dicgc?.logoImage ?? '',
      logoAlt: dicgc?.logoAlt ?? '',
      qrImage: dicgc?.qrImage ?? '',
      qrAlt: dicgc?.qrAlt ?? '',
      message: dicgc?.message ?? '',
    };
  }

  get legalLinks(): Array<{ label: string; url: string; external?: boolean; hidden?: boolean }> {
    const links = this.lang.tArray<{ label: string; url: string; external?: boolean; hidden?: boolean }>('core.footer', 'legalLinks');
    return links.filter(link => !link.hidden);
  }

  isExternal(url: string, external?: boolean): boolean {
    if (external) return true;
    if (!url) return false;
    if (url.startsWith('http://') || url.startsWith('https://')) return true;
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return true;
    if (url.startsWith('/assets/') || url.endsWith('.pdf')) return true;
    return false;
  }


  constructor(
    // private visitorSvc: VisitorService,
    public lang: LanguageService
  ) { }

  ngOnInit(): void {
    // this.visitorsToday = this.visitorSvc.incrementToday();
  }

  switchLang(l: 'en' | 'kn') {
    this.lang.loadLanguage(l);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
