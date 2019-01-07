import { PessoaService } from './../../services/pessoa.service';
import { TestBed, it, beforeEachProviders } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


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

it('fetchAll$: should return a sorted list', () => {
    const mockAirports = {
        DUB: { name: 'Dublin' },
        WRO: { name: 'Wroclaw' },
        MAD: { name: 'Madrid' }
    };
    service.fetchAll$().subscribe(airports => {
        expect(airports.length).toBe(3);
        expect(airports[2][0]).toBe('WRO');
    });

    const req = httpMock.expectOne('https://foo.bar.com/airports');

    req.flush(mockAirports);
    httpMock.verify();
});