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
            expect(pessoa).toEqual(pessoaTeste);
            pessoasMock.push();
            expect(pessoasMock.length).toBe(5);
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('POST');
        req.flush(pessoasMock);
       
    });

    test('bucarPorId() passando o id da pessoa', () => {
        service.buscarPorId(0).subscribe(pessoa => {
            expect(pessoa).toEqual(pessoasMock[0]);
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${0}`);
        expect(req.request.method).toEqual('GET');
        req.flush(pessoasMock);
        
    });

    test('deletar() passando o id', () => {
        service.deletar(1).subscribe(pessoa => {
            expect(pessoa).toEqual(pessoasMock[1]);
            pessoasMock.splice(1, 1);
            expect(pessoasMock.length).toBe(3);
        });
        const req = httpMock.expectOne(`api/projeto-teste/pessoas/${1}`);
        expect(req.request.method).toEqual('DELETE');
        req.flush(pessoasMock);
        
    });

    test('alterar() passando os atributos', () => {
        pessoaTeste.idade = 30;
        service.alterar(pessoaTeste).subscribe(pessoa => {
            expect(pessoa).toEqual(pessoaTeste);
        });

        const req = httpMock.expectOne(`api/projeto-teste/pessoas`);
        expect(req.request.method).toEqual('PUT');
        req.flush(pessoaTeste);
       
    });
});
