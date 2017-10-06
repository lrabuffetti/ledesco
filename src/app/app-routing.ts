import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CasasComponent } from './casas/casas.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';
import { FaqsComponent } from './faqs/faqs.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'casas', component: CasasComponent },
  { path: 'financiacion', component: FinanciacionComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'contacto', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
