import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsServiceService } from '../ads-service.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-ads-component',
  templateUrl: './ads-component.component.html',
  styleUrls: ['./ads-component.component.css'],
})
export class AdsComponentComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  campaigns: any = [];
  adSets: any;
  adCreatives: any;
  ads: any;
  showCampaign: boolean = false;
  form = {
    name: '',
    status: '',
    objective: '',
    specialAdCategory: ''
  }
  display = 'none';

  adSetsForm = {
    name: '',
    dailyBudget: '',
    bidAmount: '',
    billingEvent: '',
    optimizationGoal: '',
    campaign_id: '',
    status: '',
    countries: ''
  }

  adCreativeForm = {
    name: '',
    link: '',
    message: '',
    enrollStatus: '',
    status: ''
  }

  adsForm = {
    name: '',
    adsetId: '',
    creativeId: '',
    status: ''
  }

  constructor(private adsService: AdsServiceService) {}

  ngOnInit(): void {
    this.adsService.getCampaign('').subscribe((res) => {
      this.campaigns = res;
    });
    this.adsService.getAdSets('').subscribe((res) => {
      this.adSets = res
    });
    this.adsService.getAdCreatives('').subscribe((res) => {
      this.adCreatives = res
    });
    this.adsService.getAds('').subscribe((res) => {
      this.ads = res
    });
  }

  showCampaignModal() {
    this.showCampaign = true;
  }

  createCampaign() {
    console.log('---->', this.form);
    
    this.adsService.createCampaigns(this.form).subscribe((res) => {
      console.log(res)
      if (res) {
        this.adsService.getCampaign('').subscribe((resp) => {
          this.campaigns = resp;
        });
      }
    })
    this.closebutton.nativeElement.click();
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.closebutton.nativeElement.click();
  }

  createAds() {
    this.adsService.createAds(this.adsForm).subscribe((res) => {
      console.log(res)
      if (res) {
        this.adsService.getAds('').subscribe((resp) => {
          this.ads = resp;
        });
      }
    })
  }

  createAdSets() {
    this.adsService.createAdsets(this.adSetsForm).subscribe((res) => {
      if(res) {
        this.adsService.getAdSets('').subscribe((resp) => {
          this.adSets = resp;
        });
      }
    })
  }

  createAdCreative() {
    this.adsService.createAdCreatives(this.adCreativeForm).subscribe((res) => {
      if(res) {
        this.adsService.getAdCreatives('').subscribe((resp) => {
          this.adCreatives = resp;
        });
      }
    })
  }

  selectedCampaignId(id: any) {
    console.log('--->', id)
  }

  closeModal() {
    this.display="none";
  }
}
