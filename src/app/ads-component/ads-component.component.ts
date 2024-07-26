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
  isCampaignClicked: boolean = false;
  isAdsetsClicked: boolean = false;
  isCreativeClicked: boolean = false;
  isAdClicked: boolean = false;

  selectedCreative: any = '';
  selectedCamapign: any = '';
  selectedAdset: any = '';
  selectedAd: any = '';
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
    campaignId: '',
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
    this.display="none";
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.closebutton.nativeElement.click();
  }

  createAds() {
    this.adsForm.adsetId = this.selectedAdset;
    this.adsForm.creativeId = this.selectedCreative;
    this.adsService.createAds(this.adsForm).subscribe((res) => {
      console.log(res)
      if (res) {
        this.adsService.getAds('').subscribe((resp) => {
          this.ads = resp;
        });
      }
    })
    this.display="none";
  }

  createAdSets() {
    this.adSetsForm.campaignId = this.selectedCamapign
    this.adsService.createAdsets(this.adSetsForm).subscribe((res) => {
      if(res) {
        this.adsService.getAdSets('').subscribe((resp) => {
          this.adSets = resp;
        });
      }
    })
    this.display="none";
  }

  createAdCreative() {
    this.adsService.createAdCreatives(this.adCreativeForm).subscribe((res) => {
      if(res) {
        this.adsService.getAdCreatives('').subscribe((resp) => {
          this.adCreatives = resp;
        });
      }
    })
    this.display="none";
  }

  selectedCampaignId(id: any) {
    console.log('--->', id)
  }

  closeModal() {
    this.display="none";
  }

  campaignClicked() {
    this.isCampaignClicked = true;
    this.isAdsetsClicked = false;
    this.isAdClicked = false;
    this.isCreativeClicked = false;
  }

  adSetsClicked() {
    console.log('---->sc', this.selectedCamapign);
    
    this.isCampaignClicked = false;
    this.isAdsetsClicked = true;
    this.isAdClicked = false;
    this.isCreativeClicked = false;
  }

  creativeClicked() {
    this.isCampaignClicked = false;
    this.isAdsetsClicked = false;
    this.isAdClicked = false;
    this.isCreativeClicked = true;
  }

  adsClicked() {
    this.isCampaignClicked = false;
    this.isAdsetsClicked = false;
    this.isAdClicked = true;
    this.isCreativeClicked = false;
  }
}
