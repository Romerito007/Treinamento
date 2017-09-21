import { Component, OnInit } from '@angular/core';
import { FilmeService } from "app/adicionar-filme/filme.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-adicionar-filme',
  templateUrl: './adicionar-filme.component.html',
  styleUrls: ['./adicionar-filme.component.css']
})
export class AdicionarFilmeComponent {

  constructor(
    private router: Router,
    private filmeService: FilmeService
  ) { }

  cadastrar(f: NgForm) {
      this.filmeService.cadastrar(f.controls.nome.value, f.controls.urlPoster.value)
			.subscribe(() => {
        alert("Filme criado com sucesso!");
        f.resetForm();
			},
			err => alert('erro ao criar filme ${err}')
			);
  }

}
