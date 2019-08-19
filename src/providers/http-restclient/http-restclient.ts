import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the HttpRestclientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRestclientProvider {

  constructor(private http: HttpClient) {
    console.log('Hello HttpRestclientProvider Provider');
  }

  postData(postUrl, data?, headersConfig?): Observable<Object> {
    return this.http
      .post(postUrl, data, headersConfig)
      .map(response => response)
      .catch(this.handleError);
  }

  postNewData(postUrl, data) {
    return this.http
      .post(postUrl, data)
      .map(response => response)
      .catch(this.handleError);
  }

  getData(url): Observable<Object> {
    return this.http
      .get(url)
      .map(response => response)
      .catch(this.handleError);
  }

  getNewData(url, headers?) {
    return this.http
      .get(url,headers)
      .map(response => response)
      .catch(this.handleError);
  }

  putData(url, data?, headers?) {
    return this.http
      .put(url, data, headers)
      .map(response => response)
      .catch(this.handleError);
  }

  // function to handle service errors
  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw("error");
    }
    if (error.status === 404) {
      return Observable.throw("error");
    }
    return Observable.throw("error");
  }

}
