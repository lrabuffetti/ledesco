import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
