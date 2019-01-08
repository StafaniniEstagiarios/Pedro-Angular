import { Pessoa } from './../../models/pessoa';
import { PessoaService } from './../../services/pessoa.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: PessoaService', () => {
    let httpMock: HttpTestingController;
    let service: PessoaService;
    const pessoaTeste = new Pessoa(4, 89, "Teste", 'Teste');
    let pessoasMock: Pessoa[] = [];
    let tamanho;
    let pessoaGravada: Pessoa = new Pessoa(-1, 1, '', '');

    pessoasMock.push(new Pessoa(0, 15, "Joao", 'Estudante'));
    pessoasMock.push(new Pessoa(1, 15, "Tulio", 'Estagiario'));
    pessoasMock.push(new Pessoa(2, 55, "Djavani", 'Analista Senior'));
    pessoasMock.push(new Pessoa(3, 21, "Pedro", 'Analista Jr'));

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                PessoaService
            ]
        });
    });

    beforeEach(
        inject([PessoaService, HttpTestingController], (_service, _httpMock) => {
            service = _service;
            httpMock = _httpMock;
        })
    );

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    test('buscarTodos() retorna tamanho da lista', () => {

        service.buscarTodos().subscribe(pessoas => {
            tamanho = pessoas.length;
        });

        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('GET');
        req.flush(pessoasMock);
        expect(tamanho).toBe(4);
    });

    test('gravar() passando todos os dados', () => {
        service.gravar(pessoaTeste).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('POST');
        req.flush(pessoasMock);
        expect(pessoaGravada).toEqual(pessoaTeste);
        pessoasMock.push(pessoaGravada);
        expect(pessoasMock.length).toBe(5);
        pessoasMock.pop();
    });

    test('bucarPorId() passando o id da pessoa', () => {
        service.buscarPorId(0).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${0}`);
        expect(req.request.method).toEqual('GET');
        req.flush(pessoasMock);
        expect(pessoaGravada).toEqual(pessoasMock[0]);

    });

    test('deletar() passando o id', () => {
        service.deletar(1).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${1}`);
        expect(req.request.method).toEqual('DELETE');
        req.flush(pessoasMock);
        expect(pessoaGravada).toEqual(pessoasMock[1]);
        pessoasMock.splice(1, 1);
        expect(pessoasMock.length).toBe(3);
    });

    test('alterar() passando os atributos', () => {
        
        service.alterar(pessoaTeste).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('PUT');
        req.flush(pessoaTeste);
        expect(pessoaGravada.cargo).toBe(pessoaTeste.name);
    });
});

/*
import { Pessoa } from './../../models/pessoa';
import { PessoaService } from './../../services/pessoa.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: PessoaService', () => {
    let httpMock: HttpTestingController;
    let service: PessoaService;
    let pessoaTeste = new Pessoa;
    let pessoasMock: Pessoa[] = [];
    let tamanho;
    let pessoaGravada: Pessoa = new Pessoa;

    pessoasMock.push({id: 0, idade: 15, name: 'Joao', cargo: 'Estudante'});
    pessoasMock.push({id: 1, idade: 15, name: 'Tulio', cargo: 'Estagiário'});
    pessoasMock.push({id: 2, idade: 55, name: 'Djavani', cargo: 'Analista Senior'});
    pessoasMock.push({id: 3, idade: 21, name: 'Pedro', cargo: 'Analista Jr'});

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                PessoaService
            ]
        });
    });

    beforeEach(
        inject([PessoaService, HttpTestingController], (_service, _httpMock) => {
            service = _service;
            httpMock = _httpMock;
        })
    );

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    test('buscarTodos() retorna tamanho da lista', () => {

        service.buscarTodos().subscribe(pessoas => {
            tamanho = pessoas.length;
        });

        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('GET');
        req.flush(pessoasMock);
        expect(tamanho).toBe(4);
    });

    test('gravar() passando todos os dados', () => {
        pessoaTeste = {id: 4, idade: 59, name: 'Humberto', cargo: 'Arquivista'};
        service.gravar(pessoaTeste).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('POST');
        req.flush(pessoasMock);
        expect(pessoaGravada.cargo).toEqual(pessoaTeste.cargo);
        pessoasMock.push(pessoaGravada);
        expect(pessoasMock.length).toBe(5);
        pessoasMock.pop();
    });

    test('bucarPorId() passando o id da pessoa', () => {
        service.buscarPorId(0).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${0}`);
        expect(req.request.method).toEqual('GET');
        req.flush(pessoasMock);
        expect(pessoaGravada).toEqual(pessoasMock[0]);

    });

    test('deletar() passando o id', () => {
        service.deletar(1).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${1}`);
        expect(req.request.method).toEqual('DELETE');
        req.flush(pessoasMock);
        expect(pessoaGravada).toEqual(pessoasMock[1]);
        pessoasMock.splice(1, 1);
        expect(pessoasMock.length).toBe(3);
    });

    test('alterar() passando os atributos', () => {
        pessoaTeste.idade = 30;
        service.alterar(pessoaTeste).subscribe(pessoa => {
            pessoaGravada.cargo = pessoa.cargo;
            pessoaGravada.name = pessoa.name;
            pessoaGravada.id = pessoa.id;
            pessoaGravada.idade = pessoa.idade;
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('PUT');
        req.flush(pessoaTeste);
        expect(pessoaGravada).toEqual(pessoaTeste);
    });
});


*/