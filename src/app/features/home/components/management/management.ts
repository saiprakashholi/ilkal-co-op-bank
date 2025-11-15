import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  aboutTitle?: string;
  aboutText?: string;
  description?: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.html',
  styleUrls: ['./management.scss'],
  imports: [CommonModule],
})
export class ManagementComponent implements OnInit, OnDestroy {
  @Input() intervalMs = 5000; // rotation interval in ms
  @Input() fadeMs = 600;      // fade transition duration in ms

  constructor() { }

  members: Member[] = [
    {
      id: 1,
      name: 'Sri Belli Prakash, Ex. MLA.',
      role: 'President',
      image: 'assets/managementImages/prakash.jpeg',
      aboutTitle: 'About Sri Belli Prakash',
      aboutText: 'Sri Belli Prakash is the Ex. MLA of Ilkal Constituency and currently serving as the President of APEX Bank. With a strong background in public service and community development, he brings a wealth of experience to his role at the bank.',
      description: 'Sri Belli Prakash is a respected leader with a vision for cooperative banking.'
    },
    {
      id: 2,
      name: 'Mrs. Example Name',
      role: 'Vice President',
      image: 'assets/managementImages/sai.jpg',
      aboutTitle: 'About Sri Belli Prakash',
      aboutText: 'Sri Belli Prakash is the Ex. MLA of Ilkal Constituency and currently serving as the President of APEX Bank. With a strong background in public service and community development, he brings a wealth of experience to his role at the bank.',
      description: 'Mrs. Example brings extensive leadership and administrative experience.'
    },
    { id: 3, 
      name: 'Mr. Anand Kumar', 
      role: 'General Manager', 
      image: 'assets/managementImages/prakash.jpeg', 
      aboutTitle: 'About Sri Belli Prakash',
      aboutText: 'Sri Belli Prakash is the Ex. MLA of Ilkal Constituency and currently serving as the President of APEX Bank. With a strong background in public service and community development, he brings a wealth of experience to his role at the bank.',
     
      description: 'Mr. Anand oversees strategic planning and operations.' }
  ];

  // aboutTitle = 'About APEX Bank';
  // aboutText = 'The Bank was registered on 10th November 1915 under the name and style of “The Mysore Provincial Cooperative Bank Limited.”';

  readonly placeholder = 'assets/images/placeholder.png';

  currentIndex = 0;

  // Replace manual subscription with destroyed$ + takeUntil for robust cleanup
  private destroyed$ = new Subject<void>();

  // wheel/throttle & touch
  private wheelLock = false;
  private wheelTimeoutMs = 300; // brief throttle for wheel events
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50; // px

  ngOnInit(): void {
    // Use takeUntil so this will always be unsubscribed on destroy
    // interval(this.intervalMs)
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe(() => this.next());
  }

  ngOnDestroy(): void {
    // signal teardown for any streams using takeUntil(this.destroyed$)
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onHover(): void {
    // pausing: create a short-lived stop by signalling and restarting the interval
    // we'll stop by emitting destroyed and then recreate the interval
    this.destroyed$.next();
  }

  onLeave(): void {
    // start a fresh interval; because destroyed$ was completed earlier we need a new Subject
    // re-create destroyed$ for a fresh lifecycle
    // NOTE: recreate only if destroyed$ is closed — safer to manage with a helper
    // For simplicity, reassign a new Subject and start interval again
    (this.destroyed$ as any) = new Subject<void>();
    interval(this.intervalMs)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.next());
  }

  prev(): void {
    const len = this.members.length;
    if (!len) return;
    this.currentIndex = (this.currentIndex - 1 + len) % len;
  }

  next(): void {
    const len = this.members.length;
    if (!len) return;
    this.currentIndex = (this.currentIndex + 1) % len;
  }

  goTo(i: number): void {
    if (i >= 0 && i < this.members.length) {
      this.currentIndex = i;
    }
  }

  // wheel: scroll down => next, scroll up => prev
  onWheel(ev: WheelEvent): void {
    if (this.wheelLock) return;
    this.wheelLock = true;
    setTimeout(() => (this.wheelLock = false), this.wheelTimeoutMs);

    if (ev.deltaY > 0) {
      this.next();
    } else if (ev.deltaY < 0) {
      this.prev();
    }
  }

  // touch handlers for swipe
  onTouchStart(ev: TouchEvent): void {
    if (ev.touches && ev.touches.length) {
      this.touchStartX = ev.touches[0].clientX;
    }
  }

  onTouchEnd(_: TouchEvent): void {
    const dx = this.touchStartX - this.touchEndX;
    if (Math.abs(dx) < this.swipeThreshold) return;

    if (dx > 0) {
      // swipe left -> next
      this.next();
    } else {
      // swipe right -> prev
      this.prev();
    }
    // reset
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  onTouchMove(ev: TouchEvent): void {
    if (ev.touches && ev.touches.length) {
      this.touchEndX = ev.touches[0].clientX;
    }
  }

  handleImgError(ev: Event): void {
    const img = ev.target as HTMLImageElement;
    if (!img) return;
    if ((img.dataset as any).__fallback) return;
    img.dataset['__fallback'] = '1';
    img.src = this.placeholder;
  }

  get currentMember(): Member {
    return this.members[this.currentIndex];
  }
}
