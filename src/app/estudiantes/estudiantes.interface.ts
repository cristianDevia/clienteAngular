
export interface Estudiante {

    nombre: string;
    codigo: number;
    fechaNacimiento: Date;
}

export interface EstudianteResponse{
    Estudiante: Array<Estudiante>;
}