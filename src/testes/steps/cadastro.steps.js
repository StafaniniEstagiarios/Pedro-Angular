import { PessoaService } from './../../app/pessoa/services/pessoa.service';
import { Pessoa } from './../../app/pessoa/models/pessoa';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src\\testes\\features\\cadastro.feature');

var idadeTeste = 20;
var cargoTeste = 'Estagiário';
let pessoaService = new PessoaService();
let pessoa = new Pessoa();

defineFeature(feature, test => {
  test('criacao pessoa', ({ given, when, then }) => {
    given(/^Um candidato com seus campos preenchidos e nome igual a "(.*)"$/, function (nome) {
      pessoa.nome = nome;
    });
    when(/^eu efetuo seu cadastro$/, function () {
      pessoaService.gravar(pessoa);
    });
    then(/^o cadastro deve ser efetuado com sucesso$/, function () {
      return true;
    });
  });
});

defineFeature(feature, test => {
  test('criacao pessoa', ({ given, when, then }) => {
    Given(/^Um candidato cadastrado com seus campos preenchidos e nome igual a "(.*)"$/, function (nome) {
      return true;
    });
    When(/^eu tento cadastrar um outro candidato com o mesmo nome$/, function () {
      return true;
    });
    Then(/^o cadastro não deve ser concluido com sucesso$/, function () {
      return true;
    });
  });
});

defineFeature(feature, test => {
  test('criacao pessoa', ({ given, when, then }) => {
    Given(/^uma pessoa com os atributos "(.*)" "(.*)" e "(.*)"$/, function (nome, cargo, idade) {
      return true;
    });
    When(/^eu tento efetuar seu cadastro$/, function () {
      return true;
    });
    Then(/^o resultado deve ser "(.*)"$/, function (resultado) {
      return true;
    });
  });
});

