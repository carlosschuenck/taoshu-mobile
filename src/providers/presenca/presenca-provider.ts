import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PresencaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PresencaProvider Provider');
  }

}
