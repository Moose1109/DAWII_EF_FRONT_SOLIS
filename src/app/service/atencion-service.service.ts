import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atenciones } from '../model/atenciones';

@Injectable({
  providedIn: 'root'
})
export class AtencionServiceService {

  private baseUrl ='http://localhost:8080/api/atencion'

  constructor(private http : HttpClient) { }

    // METODOS

    public listar() : Observable<Atenciones[]>{
      return this.http.get<Atenciones[]>(this.baseUrl);
    }
  
    public registrar(atenciones: Atenciones): Observable<Atenciones>{
      return this.http.post<Atenciones>(this.baseUrl , atenciones);
    }
  
    public buscar(fecha: string): Observable<Atenciones[]> {
      return this.http.get<Atenciones[]>(this.baseUrl + `/buscarPorFecha`+ `/${fecha}`);
    }

  
    public eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
  
    }
}
