import { Component } from '@angular/core';
import { Estudiante } from './estudiantes/estudiantes.interface';
import { EstudianteService } from './estudiantes/estudiante.service';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteJS';

  public students: Array<Estudiante> = [];

  constructor(private servicioEstudiante: EstudianteService){}

  public crearEstudiante(): void {
    const estudiante: Estudiante = {nombre: 'Cristian', codigo: 444, fechaNacimiento: new Date() };
    console.log('Componente ', estudiante);
    this.servicioEstudiante.addEstudiante(estudiante).subscribe(console.log);
  }

  public listarEstudiantes(): void{
    console.log('listar');
    this.servicioEstudiante.listEstudiante().subscribe(response => {
      this.students = response.Estudiante;
    });
  }

  public eliminarEstudiante(codigo: number): void{
    console.log('eliminar', codigo);
  }
}
