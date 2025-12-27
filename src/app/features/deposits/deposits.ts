import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-deposits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deposits.html',
  styleUrl: './deposits.scss',
})
export class Deposits {
  
}
