import { Injectable } from '@angular/core';
import { Web } from 'sp-pnp-js';
import {SharedService} from './shared.service';

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

      this.web.lists.getByTitle('DLV').items.get().then((data: any) => {
        console.log("data",data);
        resolve(data);
      }).catch;
    }));
  }
}
