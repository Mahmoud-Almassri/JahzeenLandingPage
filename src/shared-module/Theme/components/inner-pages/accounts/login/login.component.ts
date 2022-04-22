import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public isEmployeeLogin: boolean;
  keyNumber: string;
  constructor(
    private baseService: BaseService,
    private notification: NotificationService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,
  ) { }

  ngOnInit(): void {
    console.log(this.isEmployeeLogin)
    this.keyNumber = "+962";
  }
  public employeeLoginForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^7[789]\d{7}$/g), Validators.minLength(9), Validators.maxLength(9)]),
    password: new FormControl('', Validators.required),
  });
  public employerLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public employeeLogin() {
    if (this.employeeLoginForm.invalid) {
      this.employeeLoginForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
    }
    else {
      this.spinner.show();
      this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.Login, this.employeeLoginForm.value).subscribe(res => {
        this.notification.showNotification('Logged in successfully', 'success');
        this.authService.setToken((res as any).accessToken);
        this.router.navigate(['/']);
        this.spinner.hide();
      },error=>{
        this.notification.showNotification('PhoneNumber or password is incorrect', 'danger');
        this.spinner.hide();
      });
    }
  } 
  public employerLogin() {
    if (this.employerLoginForm.invalid) {
      this.employerLoginForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
    }
    else {
      this.spinner.show();
      this.baseService.postItem(Controllers.WebEmployerAuth, Actions.Login, this.employerLoginForm.value).subscribe(res => {
        this.notification.showNotification('Logged in successfully', 'success');
        this.authService.setToken((res as any).accessToken);
        this.router.navigate(['/']);
        this.spinner.hide();
      },error=>{
        this.notification.showNotification('Email or password is incorrect', 'danger');
        this.spinner.hide();
      });
    }
  }
}
