import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() public settings: AppSettingsModel;

  constructor(
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
  ) { }
  public conactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }

  public submit() {
    if (!this.conactForm.invalid) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
      this.baseService.postItem(Controllers.ContactUs, Actions.Post, this.conactForm.value).subscribe(res => {
        this.notification.showNotification('Your message has been sent successfully', 'success');
        this.conactForm.reset();
        this.spinner.hide();

      }, error => {
        this.spinner.hide();
      })
    }
    else {
      this.notification.showNotification('You should enter the message and related data', 'danger');
    }

  }
}
