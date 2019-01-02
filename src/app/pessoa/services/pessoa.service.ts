import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class PessoaService {

  private PessoasUrl = 'api/ProjetoTeste/rest/pessoas';

  constructor(
    private http: HttpClient){}

  buscarTodos (): Observable<Pessoa[]> {
    console.log(httpOptions);
    return this.http.get(this.PessoasUrl)
        .pipe(catchError(this.handleError()));
  }

  gravar (pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<any>(this.PessoasUrl, pessoa)
        .pipe(catchError(this.handleError()));
  }

  alterar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<any>(this.PessoasUrl, pessoa)
        .pipe(catchError(this.handleError()));
  }

  deletar(id: Number): Observable<Pessoa>{
      return this.http.delete<any>(this.PessoasUrl+`/${id}`, httpOptions)
        .pipe(map(pessoas => pessoas[0]), catchError(this.handleError())
      );
  }

  private handleError () {
    return (error: any): Observable<any> => {
      return of(error.msg);
    };
  }

}