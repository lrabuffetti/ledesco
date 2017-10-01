import { Component } from '@angular/core';

/*
  Set a class for the items on the navigation menu
 */
export class NavItem {
  title: string;
  link: string;
  search_id: string;
}

export class CarouselItem {
  fileName: string;
  fileSrc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationItems: NavItem[] = [
    {
      title: 'inicio',
      link: '',
      search_id: 'inicio, home'
    },
    {
      title: 'empresa',
      link: '/empresa',
      search_id: 'empresa, la empresa, quienes somos, que hacemos'
    },
    {
      title: 'casas',
      link: '/casas',
      search_id: 'casas, modelos, construcciones, planos, ejemplos, viviendas, barrios'
    },
    {
      title: 'financiacion',
      link: '/financiacion',
      search_id: 'financiacion, precios, pagos, metodos, bancos, creditos'
    },
    {
      title: 'preguntas frecuentes',
      link: '/faqs',
      search_id: 'preguntas, frecuentes, dudas, faqs'
    },
    {
      title: 'ubicacion',
      link: '/ubicacion',
      search_id: 'ubicacion, direccion, donde, estamos'
    },
    {
      title: 'contacto',
      link: '/contacto',
      search_id: 'contacto, telefono, mail, direccion, donde, estamos'
    }
  ]

  carouselItems: CarouselItem[] = [
    {
      fileName: 'casa 1',
      fileSrc: '../assets/home/1.jpg'
    },
    {
      fileName: 'casa 2',
      fileSrc: '../assets/home/2.jpg'
    },
    {
      fileName: 'casa 3',
      fileSrc: '../assets/home/3.jpg'
    },
    {
      fileName: 'casa 4',
      fileSrc: '../assets/home/4.jpg'
    },
    {
      fileName: 'casa 5',
      fileSrc: '../assets/home/5.jpg'
    },
    {
      fileName: 'casa 6',
      fileSrc: '../assets/home/6.jpg'
    }
  ]
}
