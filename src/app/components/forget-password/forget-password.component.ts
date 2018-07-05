import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  /** Add class to the root element for this component (app-login) */
  @HostBinding('class') classes: string = 'app flex-row align-items-center';

  /**
   * To capture the email
   * 
   * @var string
   */
  email: string = '';

  constructor() { }

  ngOnInit() {
    /** code */
  }

  onSubmit() {
    alert('Submit Success');
  }

}
