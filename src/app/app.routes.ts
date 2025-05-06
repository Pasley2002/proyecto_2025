import { Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './Paginas/lista-productos/lista-productos.component';

export const routes: Routes = [
    {path: '', component: ProductoComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'producto/:idProducto', component: ProductoComponent},
    {path: 'listaProducto', component: ListaProductosComponent}
];