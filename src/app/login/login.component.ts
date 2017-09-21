import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { Router } from "@angular/router";
import { LoginService } from "app/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: LoginService, private router: Router) {}

  usuarioLogin = {
    email: null,
    senha: null
  }

  enviarFormulario(form: NgForm) {
    this.service.autenticarLogin(this.usuarioLogin.email, this.usuarioLogin.senha)
      .subscribe(() => this.router.navigate(['/filmes']), alert);
	}
}
