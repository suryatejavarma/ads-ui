import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

  constructor(private http: HttpClient) { }

  getCampaign (params: any) {
    params = {
      adAccountId: 'act_1234678'
    }
    let  paramOptions = new HttpParams({
      fromObject: params
    });
    return this.http.get(`http://localhost:4000/getCampaign`, { params: paramOptions })
  }

  getAdSets (params: any) {

    let  paramOptions = new HttpParams({
      fromObject: params
    });
    return this.http.get(`http://localhost:4000/getAdSets`, { params: paramOptions })
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
    let  paramOptions = new HttpParams({
      fromObject: reqBody
    });
    return this.http.post(`http://localhost:4000/getAds`, paramOptions)

  }
    createAdsets (reqBody: any) {
      let  paramOptions = new HttpParams({
        fromObject: reqBody
      });
      return this.http.post(`http://localhost:4000/getAds`, paramOptions)
    }

    createAdCreatives (reqBody: any) {
      let  paramOptions = new HttpParams({
        fromObject: reqBody
      });
      return this.http.post(`http://localhost:4000/getAds`, paramOptions)
    }

    createAds (reqBody: any) {
      let  paramOptions = new HttpParams({
        fromObject: reqBody
      });
      return this.http.post(`http://localhost:4000/getAds`, paramOptions)
    }
  
}
