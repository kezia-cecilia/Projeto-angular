import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  
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
}
