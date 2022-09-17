/*
    TIPOS PRIMITIVOS

      boolean, undefined, number, string
      imutáveis

    Exemplos
    let adress = 42; 
    adress é um Number agora
    adress = "bar"; 
    adress é um String agora
    adress = true; 
    adress é um Boolean agora

    boolean representa verdadeiro (ture) ou falso (false)
    
    Exemplo
    let weekend = false

    undefined
      atribuido automaticamente a uma variável sem atribuição
    Exemplo
    let appointment

    Number
      dado to tipo número
      let age = 12  
      age é um número inteiro
      let age = 12 
      age é um número inteiro

    NaN - Not a Number
      representa dado que não é numero
    Exemplo
    let noANumber = (25 * casa)
     notANumber = NaN, pois é impossível multiplicar um número por uma string alfanumérica

    Infinity valor simbolico que representa o infinoto. Precisa ser declarado com "I" maiúsculo
    Exemplo
      let numberInfinity = (42 / 0)
      number numberInfinity = Infinity

    String é uma cadeia de caracteres
    para atribuir uma string a uma variavel pode usar 
    '' aspas simples
    "" aspas duplas
    ` ` template literals, para incluir outras variáveis e expressões dentro da própria string
    Exemplos
      let name = "Mayk Brito"
      let name = 'Mayk Brito'
      let name = `Mayk ${ 1 + 1 }` // aqui o resultado é Mayk 2
*/

/*
  TIPOS ESTRUTURAIS
  Dados do tipo estrutural são diferentes dos tipos primitivos, pois apresentam uma “estrutura” com
  atributos e métodos.
  São estes os mais comuns: Object e Array 


  Object
    dados que possuem atributos (propriedades) e (métodos)
    Exemplo
      const copo = {
        material: "vidro", string
        capacidade: 25, number
        cheio: function() {
          aqui podemos declarar uma função/método que será atribuído ao Object
        }
      }

    Array
    Agrupamento de dados em forma de lista
    Exemplo
      const shoppingList = [
        "Leite",
        "ovos",
        "chocolate",
        2,
        3,
      ]
*/

/* PRIMITIVOS ESTRUTURAIS
      primitivos estruturais , pois tem um valor (vazio) que são imutáveis e,
      também, podem representar uma estrutura vazia.

      Exemplo
        let appointment = null
*/
