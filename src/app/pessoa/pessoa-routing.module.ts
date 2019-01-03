import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaCadastroComponent } from './components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaResolve } from './resolves/pessoa.resolve';

const routes: Routes =[
    {path: 'pessoa', component: PessoaComponent},
    {path: 'pessoa-cadastro', component: PessoaCadastroComponent},
    {path: 'pessoa-cadastro/:id', component: PessoaCadastroComponent, resolve: {pessoa: PessoaResolve}}
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class PessoaRoutingModule {}