import { Injectable } from '@angular/core';
import { Web } from 'sp-pnp-js';
import {SharedService} from './shared.service';
import{HttpClient} from '@angular/common/http'


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DLVDataService {

  constructor(private sharedService: SharedService) { }
  web:any;
  getDLV() {
    this.web = new Web(this.sharedService.apiURL);
    console.log("this.web",this.web);
    return new Promise((resolve => {
      // this.web = new Web(this.sharedService.apiURL);

      this.web.lists.getByTitle('DLV').items.get().then((data: unknown) => {
        console.log("data",data);
        resolve(data);
      }).catch;
    }));
  }
}
