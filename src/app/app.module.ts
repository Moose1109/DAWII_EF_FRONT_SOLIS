import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { EliminarAtencionComponent } from './eliminar-atencion/eliminar-atencion.component';
import { ConsultaSolisComponent } from './consulta-solis/consulta-solis.component';
import { RegistroSolisComponent } from './registro-solis/registro-solis.component';

@NgModule({
  declarations: [
    AppComponent,  
    EliminarAtencionComponent,
    ConsultaSolisComponent,
    RegistroSolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
