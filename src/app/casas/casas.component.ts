import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarouselItem } from '../carousel-item';
import { CasasServiceService } from './casas-service.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css', '../app.component.css']
})
export class CasasComponent implements OnInit {
  pageId = 0;
  proyectosData: any = {};
  pageSection = '';
  casasData: any = {};
  displaySetting: string = 'none'
  closeResult: string = '';

  setFolder(index) {
    this.pageId = index;
  }

  getDisplay(displayOption) {
    return displayOption === 'hover' ? this.displaySetting = 'block' : this.displaySetting = 'none';
  }

  openImage(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private casasServiceService: CasasServiceService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.pageSection = this.activatedRoute.snapshot.params.id;
    if (this.activatedRoute.snapshot.params.id === 'proyectos') {
      this.casasServiceService.getProyectos().subscribe(
        data => {
          this.proyectosData = data;
        }
      );
    }
    if (this.activatedRoute.snapshot.params.id === 'casa-propia') {
      this.casasServiceService.getCasas().subscribe(
        data => {
          this.casasData = data;
        }
      );
    }
  }

}
