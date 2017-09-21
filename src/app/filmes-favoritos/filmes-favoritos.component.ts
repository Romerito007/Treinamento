import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login/login.service";
import { FavoritosService } from "app/filmes-favoritos/favoritos.service";
import { AuthInfo } from "app/shared/auth-info";
import { FilmeService } from "app/adicionar-filme/filme.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-filmes-favoritos',
  templateUrl: './filmes-favoritos.component.html',
  styleUrls: ['./filmes-favoritos.component.css']
})
export class FilmesFavoritosComponent {

  filmesFavoritos = [];

	private inscricao: Subscription;

  constructor(private loginService: LoginService, 
              private favoritosService: FavoritosService,
              private filmesService: FilmeService) {
    favoritosService.getFavoritoById()
    .subscribe(data => this.carregarFilmes(data));

  }

  logout() {
		this.loginService.logout();
  }
  
  carregarFilmes(data) {
    
    this.filmesFavoritos = [];

    data.forEach(element => {
      this.inscricao = this.filmesService.getFilmeById(element.keyFilme)
        .subscribe(data2 => this.filmesFavoritos.push(data2));
    });

    this.inscricao.unsubscribe();
  }

}
