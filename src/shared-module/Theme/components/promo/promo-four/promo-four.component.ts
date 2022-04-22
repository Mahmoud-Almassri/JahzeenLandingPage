import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { AppSettingsModel } from 'src/app/shared/models/appsettings.model';

@Component({
  selector: 'app-promo-four',
  templateUrl: './promo-four.component.html',
  styleUrls: ['./promo-four.component.css']
})
export class PromoFourComponent implements OnInit {
  @Input() public settings: AppSettingsModel;

  constructor() { }

  ngOnInit(): void {
     Aos.init();
  }

}
