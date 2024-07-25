import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdsServiceService } from '../ads-service.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  adsForm = new FormGroup({
    name: new FormControl(''),
    adsetId: new FormControl(''),
    creative_id: new FormControl('120212263539310120'),
    status: new FormControl('')
  })

  constructor(private adSerice: AdsServiceService) {

  }

  createAds() {
    this.adSerice.createAds(this.adsForm).subscribe((res) => {
      console.log(res)
    })
  }
}
