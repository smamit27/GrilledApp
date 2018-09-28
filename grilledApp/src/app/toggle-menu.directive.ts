import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleMenu]'
})
export class ToggleMenuDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') isToggle () {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
