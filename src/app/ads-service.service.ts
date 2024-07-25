import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

  constructor(private http: HttpClient) { }

  getCampaign (params: any) {
    params = {
      adAccountId: params
    }
    let  paramOptions = new HttpParams({
      fromObject: params
    });
    return this.http.get(`http://localhost:4000/getCampaign`, { params: paramOptions })
  }

  getAdSets (params: any) {

    params = {
      campaignId: params
    }
    return this.http.get(`http://localhost:4000/getAdSets`, { params: params })
  }

  getAdCreatives (params: any) {

    let  paramOptions = new HttpParams({
      fromObject: params
    });
    return this.http.get(`http://localhost:4000/getAdCreatives`, { params: paramOptions })
  }

  getAds (params: any) {
    let  paramOptions = new HttpParams({
      fromObject: params
    });
    return this.http.get(`http://localhost:4000/getAds`, { params: paramOptions })
  }

  createCampaigns (reqBody: any) {
    return this.http.post(`http://localhost:4000/createCampaign`, reqBody)
  }

    createAdsets (reqBody: any) {
      return this.http.post(`http://localhost:4000/createAdSet`, reqBody)
    }

    createAdCreatives (reqBody: any) {

      return this.http.post(`http://localhost:4000/createAdCreative`, reqBody)
    }

    createAds (reqBody: any) {
      return this.http.post(`http://localhost:4000/createAd`, reqBody)
    }
  
}
