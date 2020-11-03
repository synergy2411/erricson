import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector : '[appHighlight]'
})
export class HighlightDirective {

  @Input() myColor: string;
  @HostBinding('style.background-color') bgColor: any;

  @HostListener('mouseenter')
  onmouseenter() {
    this.bgColor = this.myColor;
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef : ElementRef) {
  //   console.log('Directive works!');
  //   this.elementRef.nativeElement.style.backgroundColor = 'aqua';
  // }
}

// <div appHighlight></div>
