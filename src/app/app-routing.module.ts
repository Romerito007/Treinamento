import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LogadoGuard } from './logado.guard';
import { ErroNaoLogadoComponent } from './erro-nao-logado/erro-nao-logado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { GerenciarFilmeComponent } from './gerenciar-filme/gerenciar-filme.component';
import { AdicionarFilmeComponent } from './adicionar-filme/adicionar-filme.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/filmes', pathMatch: 'full' },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'filmes', component: ListagemFilmesComponent },
  { path: 'filme/:id', component: GerenciarFilmeComponent, canActivate: [LogadoGuard] },
  { path: 'admin/adicionar-filme', component: AdicionarFilmeComponent, canActivate: [AdminGuard] },
  { path: 'erro-nao-logado', component: ErroNaoLogadoComponent },
  { path: '**', redirectTo: '/filmes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
