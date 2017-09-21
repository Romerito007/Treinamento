import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilmeService } from "app/adicionar-filme/filme.service";
import { FavoritosService } from "app/filmes-favoritos/favoritos.service";
import { Filme } from "app/filme";

@Component({
  selector: 'app-gerenciar-filme',
  templateUrl: './gerenciar-filme.component.html',
  styleUrls: ['./gerenciar-filme.component.css']
})
export class GerenciarFilmeComponent {

  filme: Filme;
  id;

  constructor(route: ActivatedRoute, filmeService: FilmeService, private favoritosService: FavoritosService) {
    
    this.id = route.snapshot.params['id'];
    
    filmeService.getFilmeById(this.id)
      .subscribe(retorno => { this.filme = retorno; })
  }

  adicionar(key) {
    this.favoritosService.cadastrar(key)
    .subscribe(data => alert('Cadastrado Com Sucesso!'));
  }

  remover() {
    console.log(this.id);
    this.favoritosService.remover(this.id)
    .subscribe(data => alert('Removido Com Sucesso!'));
  }


}
