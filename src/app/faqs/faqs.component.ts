import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FaqsService } from './faq-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css', '../app.component.css']
})
export class FaqsComponent implements OnInit {

  public faqs = [];
  @ViewChild('mainScreen') elementView: ElementRef;
  viewHeight: number;

  public customCss(customStyle) {
    return customStyle ? 'question-background' : 'question-padding';
  }

  constructor(private faqsService: FaqsService) { }

  ngOnInit() {
    this.faqsService.getFaqs().subscribe(
      data => {
        this.faqs = data;
      }
    );

    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    console.log(this.viewHeight);
  }

}
