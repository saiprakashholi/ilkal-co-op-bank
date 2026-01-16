import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverZoom]'
})
export class HoverZoomDirective {

  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.transition =
      'transform 0.25s ease, filter 0.25s ease';
  }

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
    this.el.nativeElement.style.filter =
      'drop-shadow(0 4px 10px rgba(0,0,0,0.25))';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.filter = 'none';
  }
}
