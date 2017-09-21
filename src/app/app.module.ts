import { LogadoGuard } from './logado.guard';
import { AdminGuard } from 'app/admin.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from 'app/login/login.service';
import { HttpModule } from '@angular/http';
import { FilmesFavoritosComponent } from './filmes-favoritos/filmes-favoritos.component';
import { GerenciarFilmeComponent } from './gerenciar-filme/gerenciar-filme.component';
import { AdicionarFilmeComponent } from './adicionar-filme/adicionar-filme.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ErroNaoLogadoComponent } from './erro-nao-logado/erro-nao-logado.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFireAuth } from "angularfire2/auth/auth";
import { AuthInfo } from "app/shared/auth-info";
import { FilmeService } from "app/adicionar-filme/filme.service";
import { FavoritosService } from "app/filmes-favoritos/favoritos.service";

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent,
    LoginComponent,
    FilmesFavoritosComponent,
    GerenciarFilmeComponent,
    AdicionarFilmeComponent,
    MenuAdminComponent,
    ErroNaoLogadoComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [LoginService, AdminGuard, LogadoGuard, AngularFireDatabase, 
                AngularFireAuth, FilmeService, FavoritosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
