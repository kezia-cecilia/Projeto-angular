import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../alunos/aluno.model';
Observable
HttpClient
AlunoModel


@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private url: string = "http://localhost:3000/alunos/"
  constructor(private http:HttpClient) { }

  listarAlunos(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
  cadastrar(aluno: AlunoModel): Observable<any>{
    return this.http.post(`${this.url}`, aluno)
  }
  Atualizar(id: any, aluno: AlunoModel): Observable<any>{
    return this.http.put(`${this.url}`.concat(id), aluno)
  }
  Excluir(id: any){
    return this.http.delete(`${this.url}`.concat(id))

  }
}