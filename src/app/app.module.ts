import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsComponentComponent } from './ads-component/ads-component.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './campaign/campaign.component';
import { AdsetsComponent } from './adsets/adsets.component';
import { AdcreativesComponent } from './adcreatives/adcreatives.component';
import { AdsComponent } from './ads/ads.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
@NgModule({
  declarations: [
    AppComponent,
    AdsComponentComponent,
    CampaignComponent,
    AdsetsComponent,
    AdcreativesComponent,
    AdsComponent,
    GoogleAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
