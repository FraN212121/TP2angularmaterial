import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';

const routes: Routes = [
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"servicios",component:ServiciosComponent
  },
  {
    path:"acerca",component:AcercaComponent
  },
  {
    path:"informacion",component:InformacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
