// function expression
// function anonymous

//parametros da função


const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

const soma = sum(2, 5)
console.log(soma)


sum(2, 3) // argumentos

let number1 = 5
let number2 = 3
console.log(`a soma é ${sum(number1, number2)}`)
