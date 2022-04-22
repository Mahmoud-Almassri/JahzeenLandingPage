import { Component, Input, OnInit } from '@angular/core';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';

@Component({
  selector: 'app-content-five',
  templateUrl: './content-five.component.html',
  styleUrls: ['./content-five.component.css']
})
export class ContentFiveComponent implements OnInit {

  constructor() { }
  @Input() public settings: AppSettingsModel;

  ngOnInit(): void {
  }

}
