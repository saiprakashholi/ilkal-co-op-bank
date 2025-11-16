import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // Optional: change brand color from parent if needed
  @Input() brandColor = '#3298cd'; // adjust to your primary
  today = new Date();
}

