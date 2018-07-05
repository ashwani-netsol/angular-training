import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** Add class to the root element for this component (app-login) */
  @HostBinding('class') classes: string = 'app flex-row align-items-center';

  ngOnInit() {
  }

}
