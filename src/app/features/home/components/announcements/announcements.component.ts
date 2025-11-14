import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Announcement {
  id: number;
  title: string;
  href?: string;
  highlight?: boolean;
  date?: string;
}

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {
  /** Optional input: override default announcements */
  @Input() announcements: Announcement[] = [
    { id: 1, title: 'Details of Amount Transferred to DEA Fund Account as on 30.06.2025', href: '#', highlight: false, date: '30 Jun 2025' },
    { id: 2, title: 'Information on secured assets possesses under the SARFAESI ACT, 2002 (As On 31.08.2025)', href: '#', highlight: false, date: '31 Aug 2025' },
    { id: 3, title: 'Process of claiming the amount from DEA Fund', href: '#', highlight: false, date: '—' },
    { id: 4, title: 'Final Revised key answers for the post of Bank Assistants–2024', href: 'assets/docs/key-answers-2024.pdf', highlight: true, date: '2024' },
    { id: 5, title: 'Recruitment EXAM Final Result–2024', href: 'assets/docs/recruitment-result-2024.pdf', highlight: true, date: '2024' }
  ];

  // sanitize simple href usage: open external links in new tab
  isExternal(href?: string) {
    return !!href && (href.startsWith('http://') || href.startsWith('https://'));
  }
}
