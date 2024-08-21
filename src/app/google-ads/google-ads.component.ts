import { Component, ViewChild } from '@angular/core';
import { AdsServiceService } from '../ads-service.service';

@Component({
  selector: 'app-google-ads',
  templateUrl: './google-ads.component.html',
  styleUrls: ['./google-ads.component.css']
})
export class GoogleAdsComponent {
  @ViewChild('closebutton') closebutton: any;
  campaigns: any = [];
  adgroups: any = [];
  budgets: any = [];
  ads: any;
  showCampaign: boolean = false;
  isCampaignClicked: boolean = false;
  isAdGroupClicked: boolean = false;
  isBudgetClicked: boolean = false;
  isAdClicked: boolean = false;
  errorMsg: string = '';
  errorTitle: string = '';
  showError: boolean = false;
  selectedBudget: any = '';
  selectedCamapign: any = '';
  selectedAdGroup: any = '';
  selectedAd: any = '';
  form = {
    budgetName: '',
    deliveryMethod: '',
    amount: '',
    name: '',
    objectives: '',
    waysToReach: '',
    biddings: '',
    customerAcquisition: '',
    location: '',
    audienceSegment: '',
    rotations: '',
    urlOptions: '',
    schedule: '',
    status: '',
    advertisingChannelType: '',
    enhancedCpcEnabled: '',
    targetGoogleSearch: '',
    targetSearchNetwork: ''
  };
  display = 'none';

  adGroupForm = {
    name: '',
    status: '',
    campaignId: ''
  };

  // budgetForm = {
  //   name: '',
  //   deliveryMethod: '',
  //   amount: ''
  // };

  adsForm = {
    name: '',
    logo: '',
    displayPath: '',
    status: '',
    headline1: '',
    headline2: '',
    headline3: '',
    headline4: '',
    headline5: '',
    headline6: '',
    headline7: '',
    headline8: '',
    headline9: '',
    headline10: '',
    headline11: '',
    headline12: '',
    headline13: '',
    headline14: '',
    headline15: '',
    description1: '',
    description2: '',
    description3: '',
    description4: '',
    path1: '',
    path2: '',
    finalUrl: '',
    siteLinks: '',
    callout: '',
    otherExtensions: '',
    adUrlOption: '',
    adGroupId: ''
  };

  channelTypes = [
    'UNSPECIFIED',
    'UNKNOWN',
    'SEARCH',
    'DISPLAY',
    'SHOPPING',
    'HOTEL',
  ];
  audienceSegment = [
    'VIDEO',
    'SEARCH',
    'DISPLAY',
    'SHOPPING',
    'HOTEL',
    'DEMAND GEN'
  ];
  objective = ['Leads'];
  waysToReach = ['Website visits', 'Phone calls', 'Lead From Submmisions'];
  biddings = ['Conversion', 'Clicks', 'Impression share'];
  acquisitions = ['Bid higher for new customers than for existing customers', 'Only bid for new customers']
  constructor(private adsService: AdsServiceService) {}

  ngOnInit(): void {
    this.adsService.getGoogleCampaign('').subscribe((res: any) => {
      // console.log('camp ::', res)
      this.campaigns = res[0].results;
    });
    this.adsService.getGoogleAdGroup('').subscribe((res: any) => {
      // console.log('budget ::', res)
      this.adgroups = res[0].results;
    });
    this.adsService.getGoogleCampaignBudget('').subscribe((res: any) => {
      // console.log('adgroup ::', res)
      this.budgets = res[0].results;
    });
    this.adsService.getGoogleAd('').subscribe((res: any) => {
      // console.log('ads ::', res)
      this.ads = res[0].results;
    });
  }

  showCampaignModal() {
    this.showCampaign = true;
  }

  createCampaign() {
    this.display = 'none';
    console.log('form-->', this.form)
    this.adsService.createGoogleCampaignBudget(this.form).subscribe((res) => {
      console.log(res);
      if (res) {
        console.log('res---->', res)
        this.adsService.getGoogleCampaign('').subscribe((resp: any) => {
          console.log('resp---->', resp)
          this.campaigns = resp[0].results;
        });
        console.log('--->', this.campaigns)
      }
    });
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.closebutton.nativeElement.click();
  }

  createAds() {
    this.adsForm.adGroupId = this.selectedAdGroup
    this.adsService.createGoogleAds(this.adsForm).subscribe((res) => {
      console.log(res);
      if (res) {
        this.adsService.getGoogleAd('').subscribe((resp: any) => {
          this.ads = resp[0].results;
        });
      }
    });
    this.display = 'none';
  }

  createAdSets() {
    console.log('---->', this.selectedCamapign)
    this.adGroupForm.campaignId = this.selectedCamapign
    this.adsService.createGoogleAdsets(this.adGroupForm).subscribe((res) => {
      console.log(res);
      if (res) {
        this.adsService.getGoogleAdGroup('').subscribe((resp: any) => {
          this.adgroups = resp[0].results;
        });
      }
    });
    this.display = 'none';
  }

  // createCampaignBudget() {
  //   this.adsService.createGoogleCampaignBudget(this.form).subscribe((res) => {
  //     console.log(res);
  //     if (res) {
  //       this.adsService.getGoogleCampaignBudget('').subscribe((resp) => {
  //         this.campaigns = resp;
  //       });
  //     }
  //   });
  //   this.display = 'none';
  // }

  selectedCampaignId(id: any) {
    console.log('--->', id);
  }

  closeModal() {
    this.display = 'none';
  }

  campaignClicked() {
    this.isCampaignClicked = true;
    this.isAdGroupClicked = false;
    this.isAdClicked = false;
    this.isBudgetClicked = false;
  }

  adSetsClicked() {
    console.log('---->sc', this.selectedCamapign);

    this.isCampaignClicked = false;
    this.isAdGroupClicked = true;
    this.isAdClicked = false;
    this.isBudgetClicked = false;
  }

  budgetClicked() {
    this.isCampaignClicked = false;
    this.isAdGroupClicked = false;
    this.isAdClicked = false;
    this.isBudgetClicked = true;
  }

  adsClicked() {
    this.isCampaignClicked = false;
    this.isAdGroupClicked = false;
    this.isAdClicked = true;
    this.isBudgetClicked = false;
  }
}
