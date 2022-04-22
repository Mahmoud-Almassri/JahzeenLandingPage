import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-employer-confirm-account',
  templateUrl: './employer-confirm-account.component.html',
  styleUrls: ['./employer-confirm-account.component.scss']
})
export class EmployerConfirmAccountComponent implements OnInit {

  constructor(
    private baseService: BaseService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sharedDataService: SharedDataService,
    private authService: AuthorizeService,
    private notification: NotificationService) {
  }
  public code: string;
  public email: string;
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
      this.email = result;
       // this set's the email to the default observable value
    });
    this.sharedDataService.password.subscribe(result => {
      this.password = result; 
      console.log(this.password);
      
      // this set's the email to the default observable value
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
      email: this.email,
      password: this.password,
      confirmCode: this.code
    };
    this.baseService.postItem(Controllers.WebEmployerAuth, Actions.ConfirmAccount, request).subscribe(response => {
      this.authService.setToken((response as any).accessToken);
      this.router.navigate(['/employer-complete-profile']);
      this.spinner.hide()
    }, error => {
      console.log(error);
      this.notification.showNotification(error.error, 'danger');
      this.spinner.hide();
    });

  }

}
