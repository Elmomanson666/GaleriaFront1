import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './Components/artista/artista.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { CompraComponent } from './Components/compra/compra.component';
import { CuadroComponent } from './Components/cuadro/cuadro.component';
import { ProductoComponent } from './Components/producto/producto.component';

const routes: Routes = [{path:"artista", component:ArtistaComponent},
{path:"cliente", component:ClienteComponent},
{path:"compra", component:CompraComponent},
{path:"cuadro", component:CuadroComponent},
{path:"producto", component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
