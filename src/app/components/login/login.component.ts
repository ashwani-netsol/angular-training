import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25)
      ])),
    });
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formControl() { return this.loginForm.controls; }

  login () {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .then( data => {
      this.authService.setLoggedInStatus(true);

      this.afAuth.auth.onIdTokenChanged(
        (token: any) => {
          if (token) {
            sessionStorage.userToken = token.qa;
          }
        }
      );
      this.router.navigate(['/dashboard']);
    } )
    .catch( err => this.loginError = err.message );
  }
}
