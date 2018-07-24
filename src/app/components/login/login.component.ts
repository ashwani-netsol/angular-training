import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]),
    })
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.loginForm.controls; }

  login () {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .then( data => {
      this.authService.setLoggedInStatus(true);
      this.router.navigate(['/dashboard']);
      console.log(this.authService.getLoggedInStatus());
    } )
    .catch( err => this.loginError = err.message );
  }
}
