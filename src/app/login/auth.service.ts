import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router) { }
  acesso(user: Usuario){
    if(user.login === 'adm@senac.br' && user.senha === '123456'){
      this.usuarioAutenticado = true
      alert( "Bem vindos! Você será direcionado ao painel de controle" )
      this.router.navigate(['painel'])
    }else{
      this.usuarioAutenticado = false 
      alert("Login e senha inválidos, digíte novamente")
    }

  }
}
