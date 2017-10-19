import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {

  intereses = ['interes de la consulta', 'construccion', 'casas', 'barrios', 'presupuestos'];
  contactModel = new Contact('nombre', 'tu@correo.com', 'numero de telefono', 'interes de la consulta', 'su consulta');
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
