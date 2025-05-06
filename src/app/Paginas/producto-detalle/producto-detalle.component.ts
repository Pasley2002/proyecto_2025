import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Producto } from '../../producto';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  imports: [FormsModule, MatInputModule, CommonModule, MatIconModule, MatCardModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {

  @Input('miAtributo')
  public miProducto: Producto = new Producto();
  
  @Input('indice')
  public i: number = 0;
  
  @Input()
  public odd: boolean = false;

  @Output() edita = new EventEmitter<number>();
 
  public get even (): boolean {
    return !this.odd;
  }
  public editar() {
    this.edita.emit(this.miProducto._id);
  }
}