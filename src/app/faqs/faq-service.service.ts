import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaqsService {
  url = '../../assets/services-data/faqs.json';
  data: any = {};

  constructor(private http: Http) { }

  getFaqs() {
    return this.http.get(this.url)
      .map(data => {
        data.json();
        return data.json();
      });
  }
}
