import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../ads-service.service';

@Component({
  selector: 'app-ads-component',
  templateUrl: './ads-component.component.html',
  styleUrls: ['./ads-component.component.css'],
})
export class AdsComponentComponent implements OnInit {

  selected = 'option2';
  
  constructor(private adsService: AdsServiceService) {}

  ngOnInit(): void {
    this.adsService.getCampaign('').subscribe((res) => {
      console.log('res---->', res);
    });
  }
}
