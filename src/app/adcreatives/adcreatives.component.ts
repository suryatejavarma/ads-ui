import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { AdsServiceService } from '../ads-service.service';
@Component({
  selector: 'app-adcreatives',
  templateUrl: './adcreatives.component.html',
  styleUrls: ['./adcreatives.component.css']
})
export class AdcreativesComponent {
  adsCreativeForm = new FormGroup({
    Name: new FormControl(''),
    status: new FormControl(''),
    pageId: new FormControl('118400324530182'),
    link: new FormControl(''),
    message: new FormControl(''),
    enrollStatus: new FormControl('opt_out')
  })

  constructor(private adSerice: AdsServiceService) {

  }

  ngOnInit(): void {
    
  }

  createAdsCreative() {
    this.adSerice.createAdCreatives(this.adsCreativeForm).subscribe((res) => {
      console.log(res)
    })
  }
}
