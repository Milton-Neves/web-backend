import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';

const routes: Routes = [
  { path: 'listagem', component: UsuarioListagemComponent },
  { path: 'detalhe/:id', component: UsuarioDetalheComponent },
  { path: '', redirectTo: '/listagem', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
