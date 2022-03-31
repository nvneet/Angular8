import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{
  @Input() defaultCOlor: string = 'transparent';
  // @Input() highlightColor: string = '#A68DD1';
  @Input('appBetterHighlighter') highlightColor: string = '#A68DD1';
  // @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: String = this.defaultCOlor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#678ECF');
    this.backgroundColor = this.defaultCOlor;
  }

  @HostListener('mouseenter') mouseover (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#678ECF');
    // this.backgroundColor = '#B1D14B';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = '#75CDA6';
    this.backgroundColor = this.defaultCOlor;
  }
}
