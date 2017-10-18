import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CasasServiceService {
  url = 'http://localhost:4200/assets/services-data/casas-page/proyectos.json';
  urlC = 'http://localhost:4200/assets/services-data/casas-page/casas.json';
  data = '';

  constructor(private http: Http) { }

  getProyectos() {
    return this.http.get(this.url)
      .map(data => {
        data.json();
        return data.json();
      });
  }

  getCasas() {
    return this.http.get(this.urlC)
      .map(data => {
        data.json();
        return data.json();
      });
  }
}
