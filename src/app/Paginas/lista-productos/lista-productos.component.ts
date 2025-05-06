import { Component } from '@angular/core';
import { Producto } from '../../producto';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductoDetalleComponent } from "../producto-detalle/producto-detalle.component";
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, MatListModule, MatCardModule, MatIconModule, ProductoDetalleComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  public productos: Array<Producto>;

  constructor(public route: Router, public productoService:ProductoService) {
    this.productos = this.productoService.Producto;
  }

  public editar(id:number) {
    this.route.navigateByUrl("producto/" + id.toString());
  }
}