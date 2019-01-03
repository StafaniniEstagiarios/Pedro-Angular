import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaCadastroComponent } from './components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaService } from './services/pessoa.service';
import { PessoaResolve } from './resolves/pessoa.resolve';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@NgModule({
  declarations: [
    PessoaComponent,
    PessoaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PessoaRoutingModule
  ],
  providers: [
    PessoaService,
    PessoaResolve
  ],

})
export class PessoaModule { }
