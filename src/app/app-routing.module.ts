import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EliminarAtencionComponent } from './eliminar-atencion/eliminar-atencion.component';
import { RegistroSolisComponent } from './registro-solis/registro-solis.component';
import { ConsultaSolisComponent } from './consulta-solis/consulta-solis.component';

const routes: Routes = [
  {path: '', redirectTo: '/registrar', pathMatch: 'full'},
  {path:'registrar', component: RegistroSolisComponent},
  {path:'listado', component: ConsultaSolisComponent},
  {path:'eliminar', component: EliminarAtencionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
