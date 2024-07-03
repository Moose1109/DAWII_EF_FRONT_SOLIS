import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascotas } from '../model/mascotas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  private urlBase = 'http://localhost:8080/api/mascotas';
  constructor(private http : HttpClient) { }

  public listar() : Observable<Mascotas[]>{
    return this.http.get<Mascotas[]>(this.urlBase);
  }
}
