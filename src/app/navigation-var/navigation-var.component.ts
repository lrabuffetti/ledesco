import { Component, OnInit } from '@angular/core';

/*
  Set a class for the items on the navigation menu
 */
export class NavItem {
  title: string;
  link: string;
  search_id: string;
}

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-var.component.html',
  styleUrls: ['./navigation-var.component.css']
})
export class NavigationVarComponent implements OnInit {

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
      search_id: 'casas, modelos, construcciones, planos, ejemplos, viviendas, barrios',
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

  subMenu = [
    {
      title: 'proyectos',
      link: '/casas/proyectos',
    },
    {
      title: 'casa propia',
      link: '/casas/casa-propia',
    },
    {
      title: 'barrio',
      link: '/casas/barrio',
    },
  ]
  constructor() {
  }

  ngOnInit() { }
}
