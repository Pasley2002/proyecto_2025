import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Persona } from '../../persona';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona-detalle',
  imports: [FormsModule, MatInputModule, CommonModule, MatIconModule, MatCardModule],
  templateUrl: './persona-detalle.component.html',
  styleUrl: './persona-detalle.component.css'
})
export class PersonaDetalleComponent {

   // Se recibe la instancia de 'Persona' como un parámetro de entrada
  @Input('miAtributo')
  public miPersona: Persona = new Persona(); // Inicializa 'miPersona' con una nueva instancia de Persona
  
  // Se recibe el índice de la persona en la lista
  @Input('indice')
  public i: number = 0;
  
  // Se recibe un valor booleano que indica si la persona es par o impar
  @Input()
  public odd: boolean = false;

  // Se emite un evento cuando se desea editar una persona (el componente padre escuchará este evento)
  @Output() edita = new EventEmitter<number>();

  // Se emite un evento cuando se desea eliminar una persona (el componente padre escuchará este evento)
  @Output() elimina = new EventEmitter<number>();
 
  // Computa si el índice es par. Retorna 'true' si 'odd' es 'false', y 'false' si 'odd' es 'true'
  public get even (): boolean {
    return !this.odd;
  }

  // Método para emitir un evento de edición cuando el usuario desea editar esta persona
  public editar() {
    this.edita.emit(this.miPersona.id);
  }
  
  // Método para emitir un evento de eliminación cuando el usuario desea eliminar esta persona
  eliminar() {
    this.elimina.emit(this.miPersona.id);
  }
}