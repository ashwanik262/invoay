import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from '../url/url';
import { HttpRestclientProvider } from '../http-restclient/http-restclient';
import { RequestOptions } from '@angular/http';

/*
  Generated class for the UserservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserservicesProvider {
  baseurl:"https://erp.invoay.com/"
  constructor(
    private urlService: UrlProvider,
    public http:HttpClient,
    private _http: HttpRestclientProvider) {
    console.log('Hello UserDashboardServiceProvider Provider');
  }

  getToken(): HttpHeaders {
    const headers = new HttpHeaders()
      .set("Authorization", 'Bearer ' + sessionStorage.getItem('userAccessToken'));
    return headers;
  }

  userLogin(mParams) :any {
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
  };
  // let options = new RequestOptions({ headers: headers });
    return this._http.postData("https://erp.invoay.com/"+this.urlService.urls["token"], mParams,{headers: headers });
  }

  ostsaveInformation(data) {
    let headers = this.getToken();
    return this._http.postData(`${this.urlService.baseurl}/${this.urlService.urls["saveInformation"]}`, data, { headers });
  }

  getBills(token :any,startdate:any,enddate:any) {
    let body= {
      "StoreId" : 27,
      "DateFrom" : startdate,
      "DateTo": enddate
      }
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json'); 
      myHeaders.append("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken')); 

    // const headers = new HttpHeaders()
    // .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'));
    let options = new RequestOptions({ headers  : myHeaders , params: body });
    return this._http.getNewData("https://erp.invoay.com/"+`${this.urlService.urls["billapi"]}` , options);
  }

}
