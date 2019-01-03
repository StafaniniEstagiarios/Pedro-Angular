import { Injectable } from "@angular/core";
import { Pessoa } from '../models/pessoa';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaResolve implements Resolve<Pessoa> {
  constructor(private pessoaService: PessoaService, private route: ActivatedRoute) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa> {
    let id: number = route.params.id;
    return this.pessoaService.buscarPorId(id);
  }
}
