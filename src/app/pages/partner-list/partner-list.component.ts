import { Component, OnInit } from '@angular/core';

import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {

  constructor(
    private partnerThang: PartnerService
  ) { }

  ngOnInit() {
  }

}
