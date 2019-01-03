import { isNullOrUndefined } from 'util';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from './../../models/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  public pessoa: Pessoa = new Pessoa();
  public isCadastro: boolean;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isCadastro = isNullOrUndefined(params['id']);
    });
    if (!this.isCadastro) {
      this.pessoa = this.route.snapshot.data['pessoa'];
    } else {
      this.pessoa = new Pessoa();
    }
  }

  public gravar(): void {
    this.pessoaService.gravar(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoa']);
    }, error => {
      console.log(error);
    });
  }

  public alterar(): void {
    this.pessoaService.alterar(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoa']);
    }, error => {
      console.log(error);
    });
  }
}
