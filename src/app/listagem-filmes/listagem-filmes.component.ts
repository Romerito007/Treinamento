import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "events";
import { FilmeService } from "app/adicionar-filme/filme.service";

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent {

  listaFilmes = []

  constructor(private filmeService: FilmeService) {
    filmeService.getTodosFilmes()
    .subscribe(data => this.listaFilmes = data);
  }

}
