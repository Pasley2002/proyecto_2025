import { Injectable } from '@angular/core';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  // Atributo privado que almacena la lista de personas en memoria
  private _personas: Array<Persona>;

  // Al instanciar el servicio, se intenta cargar la lista desde localStorage
  constructor() {
    // Si no hay datos en localStorage, se inicializa como arreglo vacío
    this._personas = JSON.parse(localStorage.getItem("personas") ?? '[]')
  }

  // Getter público para acceder a la lista de personas desde otros componentes
  public get Persona(): Array<Persona> {
    return this._personas;
  }
  
  // Método para refrescar la lista de personas desde localStorage (actualiza el atributo interno)
  public getPersonas(): void {
    this._personas = JSON.parse(localStorage.getItem("personas") ?? '[]')
  }

  // Guarda una nueva lista de personas en localStorage y actualiza la propiedad interna
  public savePersona(persona: Array<Persona>) {
    localStorage.setItem('personas', JSON.stringify(persona));
    this._personas = persona;
  }

  // Método alternativo para guardar y sincronizar el estado interno con localStorage
  public setPersona(personas: Array<Persona>) {
    this._personas = personas;
    localStorage.setItem('personas', JSON.stringify(this._personas));
  }
}