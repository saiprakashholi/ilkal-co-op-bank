import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-brand',
  imports: [CommonModule],
  templateUrl: './bank-brand.html',
  styleUrl: './bank-brand.scss'
})
export class BankBrand{
  @Input() showFounder = true;   // default is ON for desktop
}
