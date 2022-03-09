import { Injectable } from '@angular/core';
import { Web } from 'sp-pnp-js';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
