import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-confirm-account',
  templateUrl: './employee-confirm-account.component.html',
  styleUrls: ['./employee-confirm-account.component.scss']
})
export class EmployeeConfirmAccountComponent implements OnInit {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sharedDataService: SharedDataService,
    private authService: AuthorizeService,
    private notification: NotificationService) {
  }
  public code: string;
  public phoneNumber: string;
  public password: string;
  public isOtpCompleted = false;
  public otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: "my-super-box-class",
      input: "my-super-class",
      inputFilled: "my-super-filled-class",
      inputDisabled: "my-super-disable-class",
      inputSuccess: "my-super-success-class",
      inputError: "my-super-error-class"
    }
  };

  ngOnInit() {
    this.sharedDataService.username.subscribe(result => {
      this.phoneNumber = result;
      console.log(this.phoneNumber);
      // this set's the phoneNumber to the default observable value
    });
    this.sharedDataService.password.subscribe(result => {
      this.password = result;
      console.log(this.password);

      // this set's the phoneNumber to the default observable value
    });
  }
  public otpFilled(event) {
    console.log(event);
    this.code = event;
    this.isOtpCompleted = true;
  }
  public otpChanged(event) {
    console.log(event);
  }
  public submitForm(): void {
    this.spinner.show();
    const request = {
      phoneNumber: this.phoneNumber,
      password: this.password,
      confirmCode: this.code
    };
    this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.ConfirmAccount, request).subscribe(response => {
      this.authService.setToken((response as any).accessToken);
      this.spinner.hide();
      this.router.navigate(['/employee-complete-profile']);
    }, error => {
      this.spinner.hide();
      this.notification.showNotification(error.Message, 'danger');
    });

  }
}
