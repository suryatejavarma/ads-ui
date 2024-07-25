import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponentComponent } from './ads-component/ads-component.component';
import { CampaignComponent } from './campaign/campaign.component';

const routes: Routes = [
  {
    path: '',
    component: AdsComponentComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
