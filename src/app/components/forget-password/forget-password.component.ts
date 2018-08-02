import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  forgetPasswordError: string | boolean;
  forgetPasswordSuccess: string | boolean;
  formBusy: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
      ]))
    });
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.forgetPasswordForm.controls; }

  formControlByName(name: string) {
    return this.forgetPasswordForm.get(name);
  }

  formControlInvalidOrUntouched(name: string) {
    return this.formControlByName(name).invalid && this.formControlByName(name).touched;
  }

  sendResetPasswordLink () {
    this.formBusy = true;
    this.forgetPasswordError = true;
    this.forgetPasswordSuccess = true;
    this.authService.sendResetPasswordLink(this.forgetPasswordForm.value.email)
    .then(data => {
      this.formBusy = false;
      this.forgetPasswordError = false;
      this.forgetPasswordSuccess = 'We have sent you a mail with password reset link';
      this.forgetPasswordForm.reset();
    })
    .catch(err => {
      this.forgetPasswordSuccess = false;
      this.forgetPasswordError = err.message;
      this.formBusy = false;
    });
  }

}
