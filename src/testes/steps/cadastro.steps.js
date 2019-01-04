const {defineSupportCode} = require('cucumber');

idadeTeste = 20;
cargoTeste = 'Estagiário';

defineSupportCode(function ({Given, When, Then}) {
  Given(/^Um candidato com seus campos preenchidos e nome igual a "(.*)"$/, function(nome) {
    test('criacao pessoa', ()=>{
      const pessoa = new Pessoa();
      pessoa.nome = nome;
      pessoa.cargo = cargoTeste;
      pessoa.idade = idadeTeste;
    });
  });
  When(/^Nenhum candidato já contido no banco tiver seu nome igual a "(.*)"$/, function(nome) {
    
  });
  When(/^eu efetuo seu cadastro$/, function() {
    return true;
  });
  Then(/^o cadastro deve ser efetuado com sucesso$/, function() {
    return true;
  });
  Given(/^Um candidato cadastrado com seus campos preenchidos e nome igual a "(.*)"$/, function(nome) {
    return true;
  });
  When(/^eu tento cadastrar um outro candidato com o mesmo nome$/, function() {
    return true;
  });
  Then(/^o cadastro não deve ser concluido com sucesso$/, function() {
    return true;
  });
  Given(/^uma pessoa com os atributos "(.*)" "(.*)" e "(.*)"$/, function(nome, cargo, idade) {
    return true;
  });
  When(/^eu tento efetuar seu cadastro$/, function() {
    return true;
  });
  Then(/^o resultado deve ser "(.*)"$/, function(resultado) {
    return true;
  });
});
