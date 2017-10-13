import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarouselItem } from '../carousel-item';
import { CasasServiceService } from './casas-service.service'

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {
  pageId = 0;
  proyectosData: any;

  setFolder(index) {
    this.pageId = index;
  }

  constructor(private activatedRoute: ActivatedRoute, private casasServiceService: CasasServiceService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id === 'proyectos') {
      this.casasServiceService.getProyectos().subscribe(
        data => {
          this.proyectosData = data;
        }
      );
    }
  }

}
