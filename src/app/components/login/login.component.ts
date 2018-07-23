import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor (private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
      ])),
      password: new FormControl('', Validators.required),
    })
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.loginForm.controls; }

  login () {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.email)
    .then( data => {
      console.log(data);
    });
  }

}
