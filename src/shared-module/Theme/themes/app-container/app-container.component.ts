import { Component, OnInit } from '@angular/core';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  constructor(private baseService: BaseService) { }
  public appSettings: AppSettingsModel;
  ngOnInit(): void {
    this.getAppSettings();
  }
  public getAppSettings() {
    this.baseService.getAppSettings().subscribe((res: any) => {
      this.appSettings = res;
    })
  }
}
