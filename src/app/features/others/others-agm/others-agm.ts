import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

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
  constructor(public lang: LanguageService) { }

  get agmReports(): AgmReport[] {
    return this.lang.tArray<AgmReport>('others.others-agm', 'reports');
  }
}
