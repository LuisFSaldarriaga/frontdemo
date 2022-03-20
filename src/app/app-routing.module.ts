import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { consultHacedor } from './components/consults/consultHacedor.component';
import { registerCliente } from './components/register/registerCliente.component';
import { registerHacedor } from './components/register/registerHacedor.component';
import { serviceSolicitar } from './components/services/serviceSolicitar.component';
import { serviceSolicitarTipo } from './components/services/serviceSolicitarTipo.component';

const routes: Routes = [
{
  path:'register/hacedor',
  component:registerHacedor
},
{
  path:'register/cliente',
  component:registerCliente
},
{
  path:'services/solicitar',
  component:serviceSolicitar
},
{
  path:'services/solicitar_tipo',
  component:serviceSolicitarTipo
},
{
  path:'consult/hacedor',
  component:consultHacedor
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
