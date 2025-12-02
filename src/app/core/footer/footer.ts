import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VisitorService } from '../../services/visitors.service';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements  OnInit {
  // Optional: change brand color from parent if needed
  @Input() brandColor = '#3298cd'; // adjust to your primary
  today = new Date();
  visitorsToday = 0;

  constructor(private visitorSvc: VisitorService){

  }

  ngOnInit(): void {
  this.visitorsToday = this.visitorSvc.incrementToday();
}

}

