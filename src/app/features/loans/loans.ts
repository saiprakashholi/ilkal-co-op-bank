import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './loans.html',
  styleUrl: './loans.scss',
})
export class Loans {
 
}
