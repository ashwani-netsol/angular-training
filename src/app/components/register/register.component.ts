import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /** Add class to the root element for this component (app-login) */
  @HostBinding('class') @Input('class') classList: string = 'app flex-row align-items-center';

  constructor() { }

  ngOnInit() {
  }

}
