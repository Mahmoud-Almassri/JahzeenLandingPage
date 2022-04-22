import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrls: ['./employer-registration.component.css']
})
export class EmployerRegistrationComponent implements OnInit {
  keyNumber: string;

  constructor(
    private baseService: BaseService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sharedDataService: SharedDataService,
    private notification: NotificationService) {
  }
  public signupForm = new FormGroup({
    email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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

      if(this.signupForm.controls.email.invalid){
        this.notification.showNotification('Should Enter a valid email', 'warning');
      }
      else{
      this.notification.showNotification('Please Check Form Fields', 'warning');
      }
    }
    else {
      this.spinner.show();
      const signupForm = this.signupForm.value;
      this.baseService.postItem(Controllers.WebEmployerAuth, Actions.Signup, signupForm).subscribe(response => {
        this.spinner.hide();
        this.sharedDataService.changeData(this.signupForm.controls['email'].value, this.signupForm.controls['password'].value);
        this.router.navigate(['/employer-confirm-account']);
      }, error => {
        console.log(error);
        this.notification.showNotification(error.error.Message, 'danger');
        this.spinner.hide();
      });
    }
  }

}
