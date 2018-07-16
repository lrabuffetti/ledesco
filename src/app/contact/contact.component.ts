import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';
import { ContactServiceService } from './contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {

  public intereses = ['construccion', 'casas', 'barrios', 'presupuestos'];
  public contactModel: Contact = new Contact(
    'Su nombre',
    'su@email.com',
    'numero de telefono',
    '',
    'Su consulta'
  );
  public submitted: boolean = false;
  public notSubmitted: boolean = false;

  constructor(private contactServiceService: ContactServiceService) { }

  public onSubmit() {
    this.contactServiceService.sendEmail(this.contactModel).subscribe(res => {
      this.submitted = true;
      this.notSubmitted = false;
    }, error => {
      this.notSubmitted = true;
      this.submitted = false;
    });
  }

  ngOnInit() {
  }

}
