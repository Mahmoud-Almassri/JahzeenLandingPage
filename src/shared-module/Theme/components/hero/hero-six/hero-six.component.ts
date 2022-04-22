import { Component, Input, OnInit } from '@angular/core';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';

@Component({
  selector: 'app-hero-six',
  templateUrl: './hero-six.component.html',
  styleUrls: ['./hero-six.component.css']
})
export class HeroSixComponent implements OnInit {

  constructor() { }
  @Input() public settings: AppSettingsModel;
  ngOnInit(): void {
  }

}
