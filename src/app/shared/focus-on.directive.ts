import {Directive, ElementRef, Input} from '@angular/core';
import {Subject} from "rxjs";

@Directive({
  selector: '[focusOn]'
})
export class FocusOnDirective {

  @Input('focusOn')
  focusOn: Subject<any>;

  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    if (!this.focusOn) {
      this.el.nativeElement.focus();
    } else {
      this.focusOn.subscribe(() => {
        this.el.nativeElement.focus();
      });
    }
  }

}
