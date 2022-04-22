import { Component, Input, OnInit } from '@angular/core';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';

@Component({
  selector: 'app-footer-five',
  templateUrl: './footer-five.component.html',
  styleUrls: ['./footer-five.component.css']
})
export class FooterFiveComponent implements OnInit {
  @Input() public settings: AppSettingsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
