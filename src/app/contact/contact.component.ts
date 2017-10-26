import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {

  intereses = ['construccion', 'casas', 'barrios', 'presupuestos'];
  contactModel = new Contact('', '', '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
