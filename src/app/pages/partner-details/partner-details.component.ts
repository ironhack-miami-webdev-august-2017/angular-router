import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {

  partnerInfo: any = {};

  constructor(
    private partnerThang: PartnerService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {     // req.params
      this.activatedThang.params.subscribe(
        (myParams) => {
                    // { path: 'partners/:thePartnerId'
            const theId = Number(myParams.thePartnerId);

            this.partnerInfo = this.partnerThang.getPartnerDetails(theId);
        }
      );
  }

}
