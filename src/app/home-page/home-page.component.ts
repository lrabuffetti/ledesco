import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imagesSource: CarouselItem[] = [
    {
      imgSrc: '../assets/home/1.jpg'
    },
    {
      imgSrc: '../assets/home/2.jpg'
    },
    {
      imgSrc: '../assets/home/3.jpg'
    },
    {
      imgSrc: '../assets/home/4.jpg'
    },
    {
      imgSrc: '../assets/home/5.jpg'
    },
    {
      imgSrc: '../assets/home/6.jpg'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
