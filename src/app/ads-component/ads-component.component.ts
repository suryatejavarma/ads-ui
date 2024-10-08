import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsServiceService } from '../ads-service.service';
import * as bootstrap from 'bootstrap';
import { catchError, Observable, throwError } from 'rxjs';

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
  errorMsg: string = '';
  errorTitle: string = '';
  showError: boolean = false;
  selectedCreative: any = '';
  selectedCamapign: any = '';
  selectedAdset: any = '';
  selectedAd: any = '';
  campaignType: any = '';
  audienceControl: any;
  isLeadCampaign: boolean = false;
  form = {
    name: '',
    status: '',
    objective: '',
    specialAdCategory: '',
    buyingType: '',
    advCampaignBudget: ''
  };
  display = 'none';
  isNewAudienceControl: boolean = false;
  adSetsForm = {
    name: '',
    conversionLocation: '',
    dailyBudget: '',
    bidAmount: '',
    billingEvent: '',
    optimizationGoal: '',
    campaignId: '',
    status: '',
    countries: '',
    facebookPage: '',
    costPerGoal: '',
    budgetSchdule: '',
    startDate: '',
    endDate: '',
    newAudience: {
      location: '',
      age: 0,
      gender: ''
    },
    detailedTargeting: '',
    placements: '',
    language: ''
  };

  adCreativeForm = {
    name: '',
    link: '',
    message: '',
    enrollStatus: '',
    status: '',
    media: '',
    callToAction: '',
    primaryText: '',
    headline: '',
    description: ''
  };

  adsForm = {
    name: '',
    adsetId: '',
    creativeId: '',
    status: '',
    partnershipAd: '',

  };

  objectives = [
    'OUTCOME_LEADS',
    'OUTCOME_TRAFFIC',
    'OUTCOME_SALES',
    'OUTCOME_ENGAGEMENT',
    'OUTCOME_AWARENESS',
    'OUTCOME_APP_PROMOTION',
  ];
  billingEvent = [
    'IMPRESSIONS',
    'LINK_CLICKS',
    'PAGE_LIKES',
    'POST_ENGAGEMENT',
    'VIDEO_VIEWS',
  ];
  optimizationGoal = [
    'REACH',
    'REPLIES',
    'SOCIAL_IMPRESSIONS',
    'THRUPLAY',
    'PAGE_LIKES',
    'LINK_CLICKS',
    'LEAD_GENERATION',
  ];
  buyingTypes = ['Auction', 'Reservation'];
  detailedTargeting = ['All Demographics', 'Interests', 'Behaviour'];

  constructor(private adsService: AdsServiceService) {}

  ngOnInit(): void {
    this.adsService.getCampaign('').subscribe((res) => {
      this.campaigns = res;
    });
    this.adsService.getAdSets('').subscribe((res) => {
      this.adSets = res;
    });
    this.adsService.getAdCreatives('').subscribe((res) => {
      this.adCreatives = res;
    });
    this.adsService.getAds('').subscribe((res) => {
      this.ads = res;
    });
  }

  test() {
    console.log('----->in test')
    this.isLeadCampaign = this.campaignType == 'lead'? true : false;
  }
  changeAudience() {
    this.isNewAudienceControl = this.audienceControl == 'new'? true: false
  }
  showCampaignModal() {
    this.showCampaign = true;
  }

  createCampaign() {
    console.log('---->', this.form);

    this.adsService.createCampaigns(this.form).subscribe((res) => {
      console.log(res);
      if (res) {
        this.adsService.getCampaign('').subscribe((resp) => {
          this.campaigns = resp;
        });
      }
    });
    this.display = 'none';
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.closebutton.nativeElement.click();
  }

  createAds() {
    this.adsForm.adsetId = this.selectedAdset;
    this.adsForm.creativeId = this.selectedCreative;
    this.adsService.createAds(this.adsForm).pipe(
      catchError((err: any) => {
        console.log('---->', err.error);
        this.showError = true;
        this.errorTitle = err.error.error.error_user_title;
        this.errorMsg = err.error.error.error_user_msg;
        return throwError('No payment method')
      })
    ).subscribe((res) => {
      console.log(res);
      if (res) {
        this.adsService.getAds('').subscribe((resp) => {
          this.ads = resp;
        });
        this.showError = false;
      }
    });
    this.display = 'none';
  }

  createAdSets() {
    this.adSetsForm.campaignId = this.selectedCamapign;
    this.adsService.createAdsets(this.adSetsForm).subscribe((res) => {
      if (res) {
        this.adsService.getAdSets('').subscribe((resp) => {
          this.adSets = resp;
        });
      }
    });
    this.display = 'none';
  }

  createAdCreative() {
    this.adsService.createAdCreatives(this.adCreativeForm).subscribe((res) => {
      if (res) {
        this.adsService.getAdCreatives('').subscribe((resp) => {
          this.adCreatives = resp;
        });
      }
    });
    this.display = 'none';
  }

  selectedCampaignId(id: any) {
    console.log('--->', id);
  }

  closeModal() {
    this.display = 'none';
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
