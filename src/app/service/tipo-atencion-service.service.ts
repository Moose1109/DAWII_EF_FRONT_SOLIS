import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAtencion } from '../model/tipo-atencion';

@Injectable({
  providedIn: 'root'
})
export class TipoAtencionServiceService {

  private urlBase = 'http://localhost:8080/api/tipoAtencion';
  constructor(private http : HttpClient) { }

  public listar() : Observable<TipoAtencion[]>{
    return this.http.get<TipoAtencion[]>(this.urlBase);
  }
}
