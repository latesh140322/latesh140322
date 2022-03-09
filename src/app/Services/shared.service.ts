import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Web} from "sp-pnp-js";
import pnp from 'sp-pnp-js';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SharedService {
  showLoader = new BehaviorSubject(false);
  changeDeptDetect= new BehaviorSubject('');
  showNewFileName = new BehaviorSubject('')
  apiURL!: string | '';
  web : any

  AttachmentFilter:string | undefined;
  LOGOURL: string | undefined;
  isGetCloneModelError = false;

  constructor() { }
}
getSiteContent() {
  return new Promise((resolve) => {
    if (environment.production) {
      pnp.sp.site.getContextInfo().then((item: any) => {
        console.log('item', window.location.protocol + '//' + window.location.host);
        this.apiURL = item.WebFullUrl;
        // this.permissionsDataService.getcurrentLoggedInUser();
        this.web = new Web(this.apiURL);
        // this.LOGOURL = this.apiURL + '/SiteAssets/SkodaPDMCUI/';
        // const filterUrl = this.apiURL.split(window.location.protocol + '//' + window.location.host);
        // if (filterUrl) {
        //   this.AttachmentFilter = filterUrl[1];
        //   console.log('this.attachment filter', this.AttachmentFilter);
        // }
        resolve('Production');
      });
    } else {
      console.log('in else');
      this.apiURL = 'http://localhost:9000';
      this.LOGOURL = '/';
      // this.AttachmentFilter = '/sites/PDMC_Car';
      resolve('Local');
    }
  });
  // webServerRelativeUrl
  // webAbsoluteUrl
}