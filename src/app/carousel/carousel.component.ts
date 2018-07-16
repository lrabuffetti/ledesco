import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../app.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
