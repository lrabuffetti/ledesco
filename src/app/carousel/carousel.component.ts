import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','../app.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() items: CarouselItem;

  constructor() { }

  ngOnInit() {
  }

}
