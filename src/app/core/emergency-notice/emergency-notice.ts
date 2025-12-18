import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency-notice.html',
  styleUrl: './emergency-notice.scss',
})
export class EmergencyNoticeComponent implements OnInit {

  EMERGENCY_NOTICE = {
    enabled: true,
    type: 'warning', // 'info' | 'warning' | 'error'

    title: 'Important Public Notice',
    message: 'Due to system maintenance, NEFT and RTGS services will be unavailable from 6:00 PM to 9:00 PM on December 29, 2025. Please plan your transactions accordingly.',
    showValidity: false, // show / hide valid from section (effectiveStartTime and effectiveEndTime)
    effectiveStartTime: '2025-12-29T18:00:00',
    effectiveEndTime: '2025-12-29T21:00:00',
    // notice starts and ends
    startTime: '2025-12-11T15:00:00',
    endTime: '2025-12-17T21:00:00',
  };


  notice = this.EMERGENCY_NOTICE;
  show = false;

  ngOnInit(): void {
    if (!this.notice.enabled) return;

    const now = new Date().getTime();
    const start = new Date(this.notice.startTime).getTime();
    const end = new Date(this.notice.endTime).getTime();

    const alreadyClosed = false; //localStorage.getItem('emergency_notice_closed');

    if (now >= start && now <= end && !alreadyClosed) {
      this.show = true;
    }
  }

  close(): void {
    this.show = false;
    // localStorage.setItem('emergency_notice_closed', 'true');
  }

  getIcon(): string {
    switch (this.notice.type) {
      case 'error':
        return '⛔';
      case 'warning':
        return '⚠️';
      case 'info':
      default:
        return 'ℹ️';
    }
  }

}
