import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /** Add class to the root element for this component (app-login) */
  @HostBinding('class') classes: string = 'app flex-row align-items-center';

  constructor() { }

  ngOnInit() {
  }

}
