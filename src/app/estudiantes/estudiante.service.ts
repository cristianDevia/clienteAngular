import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante, EstudianteResponse } from './estudiantes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private servicioHttp: HttpClient) { }

  public addEstudiante(estudiante: Estudiante): Observable<any> {
    console.log('Servicio: ', estudiante);
    return this.servicioHttp.post('http://localhost:7101/AplicacionServidorEstudianteSWRESTJ-ProyectoServidorEstudianteSWRESTJ-context-root/resources/model/addEstudiante', estudiante);
  }

  public listEstudiante(): Observable<any> {
    return this.servicioHttp.get('http://localhost:7101/AplicacionServidorEstudianteSWRESTJ-ProyectoServidorEstudianteSWRESTJ-context-root/resources/model/getEstudiantes');
  }

}
