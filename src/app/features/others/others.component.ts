import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
    imports: [RouterModule, CommonModule],
  standalone: true,
})
export class OthersComponent {
  // For future use (mobile sidebar toggle, if needed)
  sidebarOpen = false;

  constructor(public lang: LanguageService) { }

  get navItems(): Array<{ label: string; url: string }> {
    return this.lang.tArray<{ label: string; url: string }>('others.others', 'navItems');
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
