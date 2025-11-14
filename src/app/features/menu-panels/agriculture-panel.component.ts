import { Component } from '@angular/core';

@Component({
  selector: 'app-agriculture-panel',
  template: `
    <div class="panel-grid">
      <div class="panel-image">
        <img src="/assets/agri.jpg" alt="agri" />
      </div>
      <div class="panel-content">
        <h3>Agriculture Finance</h3>
        <ul>
          <li><a routerLink="/agri/schemes">Interest Subsidy Scheme</a></li>
          <li><a routerLink="/agri/short-term">Short Term Finance</a></li>
          <li><a routerLink="/agri/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    :host { display:block; }
    .panel-grid { display:flex; gap:1rem; align-items:flex-start; }
    .panel-image img { width:120px; height:90px; object-fit:cover; border-radius:8px; }
    .panel-content h3 { margin:0 0 0.5rem 0; color:#0b6f98; }
    .panel-content ul { list-style:none; padding:0; margin:0; }
    .panel-content li { padding:0.35rem 0; }
  `]
})
export class AgriculturePanelComponent {}
