import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlunoModel } from './aluno.model';
ServicosService
AlunoModel

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel()

  alunos: Array<any> = new Array()
  
  constructor(private alunoService: ServicosService) { }
  ngOnInit(): void {
    this.Listar()
  }
  Listar() {
    this.alunoService.listarAlunos().subscribe( alunos => {
      this.alunos = alunos
    }, err =>{
      console.log("Erro ao listar alunos", err)
    } )
  }
  cadastrarAluno(){
    console.log(this.aluno)
    this.alunoService.cadastrar(this.aluno).subscribe( a =>{
      this.aluno = new AlunoModel()
      this.Listar()
    }, err =>{
      console.log("Erro ao listar alunos", err) 
  })
}
  atualizarAluno(id: Number){
    
    this.alunoService.Atualizar(id, this.aluno).subscribe( a =>{
      this.aluno = new AlunoModel()
      this.Listar()
    }, err =>{
      console.log("Erro ao atualizar alunos", err) 
  })
}
removerAluno(id: number){
  this.alunoService.Excluir(id).subscribe( a =>{
    this.aluno = new AlunoModel()
    this.Listar()
  }, err =>{
    console.log("Erro ao excluir alunos", err) 
})
}
}