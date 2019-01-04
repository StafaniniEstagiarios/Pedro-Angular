      #language: pt
      Funcionalidade: Cadastro De Pessoa
      O cadastro de pessoas deve poder ser feito sempre que a pessoa não for repetida.
      
      Cenário: Cadastro com nome não existente na base
      Dado Um candidato com seus campos preenchidos e nome igual a "Pedro Freitas"
      E Nenhum candidato já contido no banco tiver seu nome igual a "Pedro Freitas"
      Quando eu efetuo seu cadastro
      Então o cadastro deve ser efetuado com sucesso

      Cenário: Cadastro com nome já existente na base
      Dado Um candidato cadastrado com seus campos preenchidos e nome igual a "Pedro Freitas"
      E eu tento cadastrar um outro candidato com o mesmo nome
      Então o cadastro não deve ser concluido com sucesso

      Esquema do Cenário: Cadastro com campos faltantes
      Dado uma pessoa com os atributos "nome" "cargo" e "idade"
      Quando eu tento efetuar seu cadastro
      Então o resultado deve ser "resultado"

      Exemplos: # -1 simbolizando faltante
      | nome    | cargo    | idade | resultado |
      | ""      | "cargo1" | 15    | "falha"   |
      | "user2" | "cargo2" | 18    | "sucesso" |
      | "user3" | "cargo1" | -1    | "falha"   |
      | "user4" | -1       | -1    | "falha"   |
      | ""      | -1       | -1    | "falha"   |
