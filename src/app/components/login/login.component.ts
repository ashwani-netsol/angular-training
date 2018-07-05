import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** Add class to the root element for this component (app-login) */
  @HostBinding('class') @Input('class') classList: string = 'app flex-row align-items-center';

  ngOnInit() {
  }

}
