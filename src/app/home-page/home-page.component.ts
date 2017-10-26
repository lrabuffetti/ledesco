import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../app.component.css']
})
export class HomePageComponent implements OnInit {

  imagesSource = []

  constructor() { }

  ngOnInit() {
    this.imagesSource = [
      {
        imgSrc: '../assets/img/home/1.jpg'
      },
      {
        imgSrc: '../assets/img/home/2.jpg'
      },
      {
        imgSrc: '../assets/img/home/3.jpg'
      },
      {
        imgSrc: '../assets/img/home/4.jpg'
      },
      {
        imgSrc: '../assets/img/home/5.jpg'
      },
      {
        imgSrc: '../assets/img/home/6.jpg'
      },
    ]
  }

}
