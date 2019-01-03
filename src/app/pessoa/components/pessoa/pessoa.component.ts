import { Pessoa } from '../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public pessoa: Pessoa = new Pessoa();
  public pessoas: Pessoa [] = [];

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router:Router) { }

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

  public buscarPorId(idPessoa: number): void{
    this.pessoaService.buscarPorId(idPessoa).subscribe(
      (pessoa) => {
        this.pessoa = pessoa;
      }
    );
  }

  public deletar(pessoa: Pessoa): void{
    this.pessoaService.deletar(pessoa.id).subscribe(() => {
      console.log(this.pessoas.splice(this.pessoas.indexOf(pessoa), 1));
    }, error => {
      console.log(error);
    });
  }

  public goAlterar(id: number): void{
    this.router.navigate(['/pessoa-cadastro', id]);
  }

  public goCadastro(): void{
      this.router.navigate(['/pessoa-cadastro']);
  }

}
