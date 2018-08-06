import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Observable } from 'rxjs';
import { Company } from '../../../core/models/company';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  companyForm: FormGroup;
  companySuccess: string | boolean = false;
  formBusy: boolean = false;
  companies: Observable<Company[]>;
  showSpinner: boolean = true;
  
  ngOnInit() {
    
  }

  constructor(private companyService: CompanyService) {
    this.companyForm = new FormGroup({
      companyName: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      street: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      postalCode: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]*$')
      ])),
      country: new FormControl(null, Validators.compose([
        Validators.required
      ])),
    });

    this.companies = this.companyService.list();
    this.companies.subscribe(() =>  this.showSpinner = false );
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.companyForm.controls; }

  formControlByName(name: string) {
    return this.companyForm.get(name);
  }

  formControlInvalidOrUntouched(name: string) {
    return this.formControlByName(name).invalid && this.formControlByName(name).touched;
  }

  createCompany() {
    let company = {
      name: this.formControlByName('companyName').value,
      street: this.formControlByName('street').value,
      city: this.formControlByName('city').value,
      postalCode: this.formControlByName('postalCode').value,
      country: this.formControlByName('country').value
    };

    this.companyService.create(company)
    .then( company => {
      this.formBusy = false;
      this.companySuccess = 'Company Created Successfully';
      this.companyForm.reset();
    })
    .catch ( err => { console.error(err) });
  }
}
