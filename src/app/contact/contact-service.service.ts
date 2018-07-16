import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Contact } from '../contact';

@Injectable()
export class ContactServiceService {
  private emailUrl = '../../assets/mailer/mailer.php';

  constructor(private http: Http) { }

  sendEmail(message: Contact): Observable<Contact> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return error;
      });
  }
}
