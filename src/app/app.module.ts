import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { NavigationVarComponent } from './navigation-var/navigation-var.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CasasComponent } from './casas/casas.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';
import { FaqsComponent } from './faqs/faqs.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactComponent } from './contact/contact.component';

import { CasasServiceService } from './casas/casas-service.service';
import { ContactServiceService } from './contact/contact-service.service'

import { AppRoutingModule } from './app-routing'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavigationVarComponent,
    CarouselComponent,
    EmpresaComponent,
    CasasComponent,
    FinanciacionComponent,
    FaqsComponent,
    UbicacionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    CasasServiceService,
    ContactServiceService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
