import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-deposits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deposits.html',
  styleUrl: './deposits.scss',
})
export class Deposits {
  constructor(public lang: LanguageService) { }

  get list() {
    return this.lang.tArray<{ label: string; url: string }>('deposits', 'list');
  }
}
