import { Pessoa } from './../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public pessoa: Pessoa = new Pessoa();
  public pessoas: Pessoa [] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
      this.buscarTodos();
  }

  public buscarTodos(): void{
    this.pessoaService.buscarTodos().subscribe(
      (pessoas) => {
        this.pessoas = pessoas;
      }
    );
  }

  public deletar(idPessoa: Number): void{
    this.pessoaService.deletar(idPessoa).subscribe();
  }

  public gravar(): void{
    this.pessoaService.gravar(this.pessoa).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Requisição Finalizada');
      }
    );
  }

}
