import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerationForm: FormGroup;
  registerationError: string | boolean;
  registerationSuccess: string | boolean;
  formBusy: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      fullName: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25)
      ]))
    });
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.registerationForm.controls; }

  formControlByName(name: string) {
    return this.registerationForm.get(name);
  }

  formControlInvalidOrUntouched(name: string) {
    return this.formControlByName(name).invalid && this.formControlByName(name).touched;
  }

  passwordConfirmationValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value === this.registerationForm.value.confirmPassword) {
      return { 'passwordConfirmation': true };
    }
    return null;
  }

  register() {
    this.formBusy = true;
    this.registerationError = false;
    this.registerationSuccess = false;
    this.authService.register(this.registerationForm.value.email, this.registerationForm.value.password)
      .then(data => {
        let user = {
          id: data.user.uid,
          name: this.formControlByName('fullName').value,
          email: this.formControlByName('email').value
        };
        this.userService.createUser(user).then( () => {
          this.registerationError = false;
          this.registerationSuccess = 'Congratulations! You have registered successfully';
          this.registerationForm.reset();
          this.formBusy = false;
        });
      })
      .catch(err => {
        this.registerationSuccess = false;
        this.registerationError = err.message
        this.formBusy = false;
      });
  }
}
