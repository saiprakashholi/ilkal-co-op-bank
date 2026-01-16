import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HoverZoomDirective } from '../../shared/hover-zoom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-brand',
  imports: [CommonModule, HoverZoomDirective],
  templateUrl: './bank-brand.html',
  styleUrl: './bank-brand.scss'
})
export class BankBrand {
  @Input() showFounder = true;   // default is ON for desktop

  bankStartedYear = 1965;

  constructor(private router: Router) { }


  goHome() {
    this.router.navigate(['/']);
  }
}
