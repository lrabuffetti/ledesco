import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css', '../app.component.css']
})
export class UbicacionComponent implements OnInit {
  officeLat: number = -31.730411;
  officeLng: number = -60.531966;
  lat: number = -31.7306527;
  lng: number = -60.5341437;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }

}
