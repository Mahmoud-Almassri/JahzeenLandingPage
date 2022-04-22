import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  keyNumber: string;
  constructor(
    private baseService: BaseService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sharedDataService: SharedDataService,
    private notification: NotificationService) {
  }
  public signupForm = new FormGroup({
    phoneNumber: new FormControl('',  [Validators.required, Validators.pattern(/^7[789]\d{7}$/g), Validators.minLength(9), Validators.maxLength(9)]),
    password: new FormControl('', [Validators.required, Validators.pattern(
      "^((?=\\S*?[a-z0-9]).{5,255})\\S$"
    )]),
  });
  confirmPassword = new FormControl("", [
    Validators.required,
    this.confirmEquals()
  ]);
  confirmEquals(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value?.toLowerCase() === this.passwordValue.toLowerCase()
        ? null : { noMatch: true };
  }
  get passwordValue() {
    return this.signupForm.controls['password'].value;
  }

  ngOnInit() {
    this.keyNumber = "+962";
  }

  public submitForm(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
    }
    else {
      this.spinner.show();
      const signupForm = this.signupForm.value;
      this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.Signup, signupForm).subscribe(response => {
        this.spinner.hide();
        this.sharedDataService.changeData(this.signupForm.controls['phoneNumber'].value, this.signupForm.controls['password'].value);
        this.router.navigate(['/employee-confirm-account']);
      }, error => {
        console.log(error);
        this.notification.showNotification(error.error, 'danger');
        this.spinner.hide();
      });
    }
  }
}
