import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CasasServiceService {
  url = '../../assets/services-data/casas-page/proyectos.json';
  urlC = '../../assets/services-data/casas-page/casas.json';
  urlB = '../../assets/services-data/casas-page/barrios.json';
  data = {};

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

  getBarrios() {
    return this.http.get(this.urlB)
      .map(data => {
        data.json();
        return data.json();
      });
  }
}
