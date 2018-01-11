import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faq-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css', '../app.component.css']
})
export class FaqsComponent implements OnInit {

  public faqs = [];

  constructor(private faqsService: FaqsService) { }

  ngOnInit() {
    this.faqsService.getFaqs().subscribe(
      data => {
        this.faqs = data;
      }
    );
  }

}
