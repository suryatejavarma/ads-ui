import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdsServiceService } from '../ads-service.service';

@Component({
  selector: 'app-adsets',
  templateUrl: './adsets.component.html',
  styleUrls: ['./adsets.component.css']
})
export class AdsetsComponent {
  adSetsForm = new FormGroup({
    name: new FormControl(''),
    dailyBudget: new FormControl(''),
    bidAmount: new FormControl(''),
    billingEvent: new FormControl(''),
    optimizationGoal: new FormControl(''),
    campaign_id: new FormControl(''),
    status: new FormControl(''),
    countries: new FormControl('')
  })

  constructor(private adservice: AdsServiceService) {

  }

  createAdSets() {
    this.adservice.createAdsets(this.adSetsForm).subscribe((res) => {

    })
  }
}
