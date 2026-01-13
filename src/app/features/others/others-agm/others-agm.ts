import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AgmReport {
  year: string;
  title: string;
  url?: string;
}

@Component({
  selector: 'app-others-agm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others-agm.html',
  styleUrl: './others-agm.scss',
})
export class OthersAgm {
  agmReports: AgmReport[] = [
    {
      year: '2025–26',
      title: '61st Annual General Meeting – Report',
      // url: '/assets/downloads/agm-2025-26.pdf',
    },
    {
      year: '2024–25',
      title: '60th Annual General Meeting – Proceedings',
      url: '/assets/downloads/agm-2024-25.pdf',
    },
    {
      year: '2023–24',
      title: '59th Annual General Meeting – Report',
      url: '/assets/downloads/agm-2023-24.pdf',
    },
    {
      year: '2022–23',
      title: '58th Annual General Meeting – Proceedings',
      // url not yet available
    },
  ];
}
