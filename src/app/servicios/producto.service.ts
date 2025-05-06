import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public _productos: Array<Producto>;
  constructor() {
    this._productos = JSON.parse(localStorage.getItem("productos") ?? '[]')
  }

  public get Producto(): Array<Producto> {
    return this._productos;
  }
  
  public getProductos(): void 
  {
    this._productos = JSON.parse(localStorage.getItem("productos") ?? '[]')
  }

  public saveProducto(producto: Array<Producto>) {
    localStorage.setItem('productos', JSON.stringify(producto));
    this.getProductos();
  }
}