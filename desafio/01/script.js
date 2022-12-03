alert("Insira dois número para calcular a soma, subtração, multiplicação, divisão e o resto")


let numberOne = prompt("Insira o primeiro número")
let numberTwo = prompt("Insira o segundo número")

let soma = (Number(numberOne)) + (Number(numberTwo))
let subtração = (Number(numberOne)) - (Number(numberTwo))
let multiplicação = (Number(numberOne)) * (Number(numberTwo))
let divisão = (Number(numberOne)) / (Number(numberTwo))
let resto = (Number(numberOne)) % (Number(numberTwo))

alert("A soma dos numeros é: " + soma)
alert("A subtração dos numeros é: " + subtração)
alert("A multiplicação dos numeros é: " + multiplicação)
alert("A a divisão dos numeros é: " + divisão)
alert("O resto dos numeros é: " + resto)


if (numberOne % numberTwo == 0){
  alert("A soma dos dois números é par")
} else{
  alert("A soma dos dois números é impar")
}

if (numberOne == numberTwo) {
  alert("Os números são iguais")
} else {
  alert("Os números são diferentes")
}