import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarouselItem } from '../carousel-item';
import { CasasServiceService } from './casas-service.service'

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css', '../app.component.css']
})
export class CasasComponent implements OnInit {
  pageId = 0;
  proyectosData = [];
  pageSection = '';
  casasData = [];
  barriosData = [];
  displaySetting: string = 'none';
  closeResult: string = '';
  showBigImage: boolean = false;
  mainImage: string = '';

  setFolder(index) {
    this.pageId = index;
  }

  getDisplay(displayOption) {
    return displayOption === 'hover' ? this.displaySetting = 'block' : this.displaySetting = 'none';
  }

  openImage(imgSrc) {
    this.showBigImage = true;
    this.mainImage = imgSrc;
  }

  closeImage() {
    this.showBigImage = false;
    this.mainImage = '';
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private casasServiceService: CasasServiceService) { }

  ngOnInit() {
    this.pageSection = this.activatedRoute.snapshot.params.id;
    if (this.activatedRoute.snapshot.params.id === 'proyectos') {
      this.casasServiceService.getProyectos().subscribe(
        data => {
          this.proyectosData = data;
        }
      );
    }
    else if (this.activatedRoute.snapshot.params.id === 'casa-propia') {
      this.casasServiceService.getCasas().subscribe(
        data => {
          this.casasData = data;
        }
      );
    } else {
      this.casasServiceService.getBarrios().subscribe(
        data => {
          this.barriosData = data;
        }
      );
    }
  }

}
