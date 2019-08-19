import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import 'rxjs/add/operator/share';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Observer } from 'rxjs/Rx';
import { HttpRestclientProvider } from '../http-restclient/http-restclient';

/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApisProvider {
  baseUrl: string;

  constructor(private httpRestclientProvider: HttpRestclientProvider) {
    console.log('Hello MainServiceProvider Provider');
  }

  // // function to get data with headers
  // getUserSession(url) {
  //   let headers = {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   };
  //   const postLoginData = new HttpParams()
  //     .set("grant_type", 'password')
  //     .set("username", 'tejveer12@gmail.com')
  //     .set("password", 'Password1!');

  //   let headersConfig = new HttpHeaders(headers);
  //   let response: any = this.httpRestclientProvider.postData(url, postLoginData.toString(), { headers: headersConfig });
  //   return response;
  // }


  getuserData(url) {
    console.log(url);
    let response: any = this.httpRestclientProvider.getData(url);
    return response;
  }


  getData(url) {
    console.log(url);
    const headers = new HttpHeaders()
      .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'));
    let resp: any = this.httpRestclientProvider.getNewData(url, { headers });
    return resp;
  }

  getDataNew(url, queryParms) {
    console.log(url);
    const headers = new HttpHeaders()
      .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'));
    let resp: any = this.httpRestclientProvider.getNewData(url, { headers: headers, params: queryParms });
    return resp;
  }

  postData(url) {
    let dateNow = new Date();
    var utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
    console.log('date is : ' + dateNow);
    console.log('utcDate is : ' + utcDate);
    const headers = new HttpHeaders()
      .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'));
    const postparamData = new HttpParams()
      .set("moodId", '2')
      .set("createdOn", '' + dateNow);
    let resp: any = this.httpRestclientProvider.postData(url, postparamData.toString(), { headers });
    return resp;
  }

  postRequestParam(url, bodyParams){
    console.log('bodyParams is : ' + bodyParams);
    let resp: any = this.httpRestclientProvider.postNewData(url, bodyParams);
    return resp;
  }

  postRequest(url, bodyParams) {
    console.log('bodyParams is : ' + bodyParams);
    const headers = new HttpHeaders()
      .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'));
    let resp: any = this.httpRestclientProvider.postData(url, bodyParams, { headers });
    return resp;
  }

  postRequestApp(url, bodyParams) {
    console.log('bodyParams is : ' + bodyParams);
    const headers = new HttpHeaders()
      .set("Content-Type", 'application/json');
    let resp: any = this.httpRestclientProvider.postData(url, bodyParams, { headers });
    return resp;
  }

  postRequestNew(url, bodyParams) {
    console.log('bodyParams is : ' + bodyParams);
    const headers = new HttpHeaders()
      .set("Authorization", 'bearer ' + sessionStorage.getItem('userAccessToken'))
      .set("Content-Type", 'application/json');
    let resp: any = this.httpRestclientProvider.postData(url, bodyParams, { headers });
    return resp;
  }

}
