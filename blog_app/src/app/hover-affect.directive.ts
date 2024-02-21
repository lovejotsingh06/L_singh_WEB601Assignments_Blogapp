import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration') textDecoration: string;
  @HostBinding('style.fontWeight') fontWeight: string;
  @Input() typeStyle: string; 
  @Input() tagStyle: string;  

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle === 'textDecoration') { 
    } 
    if (this.tagStyle === 'fontWeight') { 
      this.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle === 'textDecoration') {
      this.textDecoration = ''; 
    }
    if (this.tagStyle === 'fontWeight') {
      this.fontWeight = 'normal'; 
    }
  }
}
