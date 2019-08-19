import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlProvider {
  // loginurl:any="https://erp.invoay.com/Token";
  baseurl:"https://erp.invoay.com/"
  urls: {};

  constructor(public http: HttpClient) {
    this.urls = {
      token:'Token',
      billapi:'api/bi/bills'
    }
  }

}
