import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {

  planoSrc = ''
  imagesSource: CarouselItem[] = []
  firsText = ''
  secondText = ''
  paginationItems = [1,2,3,4]

  setFolder(index) {
    return index + 1;
  }

  constructor(private activatedRoute: ActivatedRoute) {
    //Set the content for the 'proyectos' option
    if (this.activatedRoute.snapshot.params.id === 'proyectos') {
      this.planoSrc = '../../assets/proyectos/1/plano_1.jpg'
      this.imagesSource = [
        {
          imgSrc: '../../assets/proyectos/1/imagen_1.jpg'
        },
        {
          imgSrc: '../../assets/proyectos/1/imagen_2.jpg'
        },
        {
          imgSrc: '../../assets/proyectos/1/imagen_3.jpg'
        }
      ]
      this.firsText = 'Ofrecemos lotes de diferentes dimensiones que permita desarrollar la vida al aire libre con todo'
        + ' lo que ello implica. Proyectamos casas desde dos dormitorios con estilo y diseños personalizados, adaptadas'
        + ' al gusto y necesidades de nuestros clientes.'
      this.secondText = 'Priorizamos el modo de vida adaptando orientación, materiales y elementos de la mejor manera'
        + ' para que el propietario se sienta identificado.'
    }

    //Set the content for the 'casa-propia' option
    if (this.activatedRoute.snapshot.params.id === 'casa-propia') {
      this.planoSrc = '../../assets/proyectos/1/plano_1.jpg'
      this.imagesSource = [
        {
          imgSrc: '../../assets/proyectos/1/imagen_1.jpg'
        },
        {
          imgSrc: '../../assets/proyectos/1/imagen_2.jpg'
        },
        {
          imgSrc: '../../assets/proyectos/1/imagen_3.jpg'
        }
      ]
      this.firsText = 'Construccón Tradicional'
      this.secondText = 'Construimos con materiales tradicionales, nobles y de primera calidad: muros de mampostería de ladrillos'
      + ' comunes o ladrillos cerámicos huecos, dobles, con cámara de aire, capa aisladora intermedia y armaduras de hierro. Terminaciones de excelente calidad a elección del propietario. Todas las instalaciones incluídas.'
    }
  }

  ngOnInit() { }

}
