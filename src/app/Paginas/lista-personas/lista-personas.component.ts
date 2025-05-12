import { Component } from '@angular/core';
import { Persona } from '../../persona';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PersonaDetalleComponent } from "../persona-detalle/persona-detalle.component";
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-lista-personas',
  imports: [CommonModule, MatListModule, MatCardModule, MatIconModule, PersonaDetalleComponent],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {
  public personas: Array<Persona>; // Declara un array de personas

  constructor(public route: Router, public personaService: PersonaService) {
    // Inicializa 'personas' con los datos del servicio
    this.personas = this.personaService.Persona;
  }

  public editar(id: number) {
    // Navega a la página de edición de persona usando su ID
    this.route.navigateByUrl("persona/" + id.toString());
  }

  public reloadPersonas() {
    // Vuelve a cargar la lista de personas desde el servicio
    this.personas = this.personaService.Persona;
  }

  public eliminar(id: number) {
    // Elimina una persona de la lista por su ID
    this.personas = this.personas.filter(p => p.id !== id);
    // Guarda la lista actualizada en el servicio (y, por ende, en localStorage)
    this.personaService.savePersona(this.personas);
  }
}