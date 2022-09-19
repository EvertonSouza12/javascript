// string em numeros
// let string = `123`
// console.log(Number(string))
//let number = 321
//console.log(String(number))

// contando caracteres e digitos
// let word = "Paralelepipedo"
// console.log(word.length)
// let number = 1234
// console.log(String(number).length)

// transformar em numero quebrado
// let number = 41231231234.412412
// console.log(Number(number).toFixed(2).replace(".",","))

// Transformar letras maiusculas em minusculas
// let word = "Programa é muito banca"
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())

// Separando Strings em array
// let phrase = "Eu quero viver o amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore.toLowerCase())

//Encontrando palavras em frases
// let phrase = "Eu quero viver Amor"
// console.log(phrase.includes("Amor"))

//Criando array com construtor
// let myArray = new Array(`a`, `b`, `c`)
// console.log(myArray)

// Contar elementos de um array
// console.log(["a", "b" , "c", function(){return "Ola"}][3]())
// console.log(["a", "b" , "c", function(){return "Ola"}].length)

// String para array
// let word = "manipulação"
// console.log(Array.from(word))

// Manipulando arrays
let techs = ["html", "css", "js"]

// adincionar no fim
techs.push("nodejs")

// adicionar no comeco
techs.unshift("sql")

// remover do fim
// techs.pop()

// remover do inicio
// techs.shift()

//remver alguns elementos da array
// console.log(techs.slice(1, 3))

//remover 1 ou mais elementos em qualquer posição na array
// techs.splice(1,2)

//encontrar a posição de um elemento na array
let index = techs.indexOf(`html`)
techs.splice(index, 1)

console.log(techs)