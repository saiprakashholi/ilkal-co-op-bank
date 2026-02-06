import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoListComponent {

  @Input() group: any;
  @Output() close = new EventEmitter<void>();

  index = 0;

  constructor(public lang: LanguageService) { }

  // keyboard support
  @HostListener('document:keydown.escape')
  onEsc() {
    this.close.emit();
  }

  next() {
    if (this.index < this.group.photos.length - 1) {
      this.index++;
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    }
  }

  // --- MOBILE SWIPE ---
  private startX = 0;

  onTouchStart(e: TouchEvent) {
    this.startX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - this.startX;

    if (diff > 50) this.prev();
    if (diff < -50) this.next();
  }
}
