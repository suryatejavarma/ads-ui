import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdsServiceService } from '../ads-service.service';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit{

  campaignForm = new FormGroup({
    name: new FormControl(''),
    specialAdCategories: new FormControl(''),
    status: new FormControl(''),
    objective: new FormControl('')
  });

  constructor(private adSerice: AdsServiceService) {

  }

  ngOnInit(): void {
    this.createCampaign()
  }

  createCampaign() {
    this.adSerice.createCampaigns(this.campaignForm).subscribe((res) => {
      console.log(res)
    })
  }
}
