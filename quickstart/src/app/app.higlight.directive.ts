import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HiglightDirective {

    constructor(private el: ElementRef) {

      el.nativeElement.style.backgroundColor = el.nativeElement.getAttribute('highlight');
      console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
    }
}
