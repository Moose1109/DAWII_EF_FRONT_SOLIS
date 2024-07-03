import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMascotas } from '../model/tipo-mascotas';

@Injectable({
  providedIn: 'root'
})
export class TipoMascotaServiceService {

  private urlBase = 'http://localhost:8080/api/tipoMascotas';
  constructor(private http : HttpClient) { }

  public listar() : Observable<TipoMascotas[]>{
    return this.http.get<TipoMascotas[]>(this.urlBase);
  }
}
