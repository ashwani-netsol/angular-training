import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

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
