import { UserService } from './../../../core/user/user.service';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ){}

  ngOnInit(): void {
    !this.userService.isLogged()
      && this.element.nativeElement.remove()


  }

}
