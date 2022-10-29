import { Libro } from './../model/libro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroURL = environment.URL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.libroURL + 'vertodos');
  }

  public detail(id: number): Observable<Libro> {
    return this.httpClient.get<Libro>(this.libroURL + `ver/${id}`);
  }

  public save(libro: Libro): Observable<any> {
    return this.httpClient.post<any>(this.libroURL + 'crear', libro);
  }

  public update(id: number, libro: Libro): Observable<any> {
    return this.httpClient.put<any>(this.libroURL + `editar/${id}`, libro);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.libroURL + `borrar/${id}`);
  }
}
