import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Web} from 'sp-pnp-js';
import pnp from 'sp-pnp-js';
import{HttpClient } from '@angular/common/http';
 import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showLoader = new BehaviorSubject(false);
  changeDeptDetect = new BehaviorSubject('');
  showNewFileName = new BehaviorSubject('');
  apiURL!: string | '';
  web: any
  AttachmentFilter: string | undefined;
  LOGOURL: string | undefined;
  isGetCloneModelError = false;

  constructor() {
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






  getAttachments(tableName:any, id:any) {
    this.web = new Web(this.apiURL);
    return new Promise((resolve => {
      this.web.lists.getByTitle(tableName).items.getById(id).attachmentFiles.get().then((res: any) => {
        if (res) {
          resolve(res);
        }
      });
    }));
  }

  postAttachment(file: any, nameObj: any, tableName: any, id: any, from?: any) {
    this.web = new Web(this.apiURL);
    return new Promise((resolve) => {
      const timeStamp = Date.now();
      // tslint:disable-next-line:max-line-length
      const name = `${nameObj.name}.${nameObj.extensions}`;
      const item = this.web.lists.getByTitle(tableName).items.getById(id);
      item.attachmentFiles.add(name, file).then((v: any) => {
        if (v) {
          resolve({status: 'Success', newName: name});
        }
      }).catch((err: any) => {
        resolve({status: 'Fail'});
      });
    });
  }

  deleteAttachments(tableName: any, id: any, name: any) {
    this.web = new Web(this.apiURL);
    const item = this.web.lists.getByTitle(tableName).items.getById(id);
    return item.attachmentFiles.getByName(name).delete();
  }

  getTodayDate() {
    const dateObj = new Date();
    const currentmonth = dateObj.getUTCMonth() + 1; // months from 1-12
    const currentday = dateObj.getUTCDate();
    const currentyear = dateObj.getUTCFullYear();
    const currentDate = {year: currentyear, month: currentmonth, day: currentday};
    return currentDate;
  }

  getCorrectISODate(from: any, to: any) {
    const fromDate = new Date(from);
    fromDate.setUTCHours(0, 0, 0, 0);
    const toDate = new Date(to);
    toDate.setUTCHours(23, 59, 0, 0);
    return { fromDate: fromDate.toISOString(), toDate: toDate.toISOString() };
  }

  setTactObj(tact: { OperatorNo: any; OperationName: any; OperationNumber: any; ODINOperationSequence: any; ApplicableFor: any; ProcessMaterialApplicableFor: any; TactNo: any; ID: any; }){
    const obj={
      OperatorNo:tact.OperatorNo,
      OperationName:tact.OperationName,
      OperationNumber:tact.OperationNumber,
      ODINOperationSequence:tact.ODINOperationSequence,
      ApplicableFor:tact.ApplicableFor,
      ProcessMaterialApplicableFor:tact.ProcessMaterialApplicableFor,
      TactNo:tact.TactNo,
      ID:tact.ID,
    }
    localStorage.setItem('TactObj',JSON.stringify(obj));  
  }  
}