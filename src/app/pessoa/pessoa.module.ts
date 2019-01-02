import { PessoaService } from './services/pessoa.service';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './components/pessoa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
      CommonModule,
      PessoaRoutingModule
  ],
  providers: [
    PessoaService 
  ],
  
})
export class PessoaModule { }
