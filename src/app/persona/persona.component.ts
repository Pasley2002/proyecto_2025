// Importación de los módulos necesarios para el componente
import { Component } from '@angular/core';
import { Persona } from '../persona';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-persona',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})

export class PersonaComponent {
  // Instancia actual de Persona que se usa en el formulario
  public miPersona!: Persona;

  constructor(public activeRoute: ActivatedRoute, public personaService: PersonaService) {
   
    this.activeRoute.paramMap.subscribe(
      param => {
        let idParametro = param.get("idPersona") ?? "";
        // Si no hay ID en la URL, se crea una nueva persona (modo creación)
        if (idParametro == "")
          this.miPersona = new Persona();
        else {
          // Si hay ID, se busca la persona correspondiente (modo edición)
          let personas: Array<Persona> = this.personaService.Persona;
          this.miPersona = personas.find(pers => pers.id.toString() === idParametro) ?? new Persona();
        }
      }
    );
  }

  // Método para registrar en consola la tecla presionada en el input de apellido
  public log(argumento: any) 
  {
    console.info(argumento);
  }

   // Guarda o actualiza una persona en la lista
  public guardar() {
  let personas: Array<Persona> = this.personaService.Persona;

  if (this.miPersona.id) {
    let anterior = personas.find(pers => pers.id === this.miPersona.id);

    if (anterior) {
      anterior.usuario = this.miPersona.usuario;
      anterior.nombre = this.miPersona.nombre;
      anterior.apellido = this.miPersona.apellido;
      anterior.edad = this.miPersona.edad;
    }
  } else {
    // Si no tiene ID, es una nueva persona → se crea
    // Buscar el mayor ID existente y sumarle 1 para evitar duplicados
    const maxId = Math.max(...personas.map(p => p.id), 0);
    this.miPersona.id = maxId + 1;

    // Agregar la nueva persona al array
    personas.push(this.miPersona);
  }

  // Se guarda la lista modificada en el localStorage
  this.personaService.savePersona(personas);
}

// Limpia el formulario creando una nueva instancia de Persona
  public limpiar() {
    this.miPersona = new Persona();
  }
}