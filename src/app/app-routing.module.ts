import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponentComponent } from './ads-component/ads-component.component';
import { CampaignComponent } from './campaign/campaign.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';

const routes: Routes = [
  {
    path: '',
    component: AdsComponentComponent
  },
  {
    path: 'googleAds',
    component: GoogleAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
