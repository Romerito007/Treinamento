import { NgForm } from '@angular/forms/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login/login.service";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  cadastrar(f: NgForm) {
      this.loginService.cadatrar(f.controls.nome.value, f.controls.email.value, f.controls.senha.value)
			.subscribe(
			() => {
				alert('Usuário criado com sucesso !');
				this.router.navigateByUrl('/filmes');
			}, err => alert(err));
  }

}
