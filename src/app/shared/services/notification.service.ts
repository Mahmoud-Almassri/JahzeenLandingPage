import { Injectable } from '@angular/core';
declare var $: any;
import { ToastrService } from 'ngx-toastr';

const configurations = {
  type: 'success',
  title: 'This is just a title',
  content: 'This is just some content',
  timeOut: 3000,
  showProgressBar: true,
  pauseOnHover: true,
  clickToClose: true,
  animate: 'fromRight'
};
const types = ['alert', 'error', 'info', 'warn', 'success'];
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {

  }

  showNotification(message: string, type: string): void {

    //const color = Math.floor((Math.random() * 4) + 1);
    if (type == 'success') {
      this.toastr.success('Success', message,{timeOut:2000,progressBar:true,progressAnimation:'increasing',});
    }
    if (type == 'warning') {
      this.toastr.warning('Warning', message,{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    }
    if (type == 'danger') {
      this.toastr.error('Error', message,{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    }
  }


}
