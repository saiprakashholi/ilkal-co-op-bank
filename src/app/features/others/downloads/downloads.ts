import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DownloadItem {
  title: string;
  url?: string;
}

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads.html',
  styleUrl: './downloads.scss'
})
export class Downloads {
  downloads: DownloadItem[] = [
    {
      title: 'Inoperative Accounts',
      // url: '/assets/downloads/1.pdf',
    },
    {
      title: 'Information on Secured Assets Possessed under the SARFAESI Act, 2002',
      // url: '/assets/downloads/2.pdf',
    },
    {
      title: 'RBI Ombudsman Scheme',
      url: '/assets/downloads/3.pdf',
    },
    {
      title: 'Statutory Auditor Policy',
      url: '/assets/downloads/statitory-auditors Policy.pdf',
    },
    {
      title: 'Customer Complaints and Grievance',
      // url: '/assets/downloads/5.pdf',
    },
    {
      title: '61st AGM Report 2025–26',
      url: '/assets/downloads/agm-2023-24.pdf',
    },
    {
      title: '61st AGM Proceedings',
      url: '/assets/downloads/agm-2022-23.pdf',
    },
  ];
}
