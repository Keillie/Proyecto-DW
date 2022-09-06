import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiURL = "http://127.0.0.1:8000/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.apiURL + '/empleado')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(Empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.apiURL + '/clients', JSON.stringify(Empleado), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  encontrar(nombre: string,  contrasena:string):Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.apiURL + '/usuario/'+nombre+','+contrasena)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.apiURL + '/clients/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, Empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(this.apiURL + '/clients/' + id, JSON.stringify(Empleado), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Empleado>(this.apiURL + '/clients/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
