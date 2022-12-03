// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleKeyPress)

// Funções
function validateNumber(){
  if((Number(inputNumber.value)) > 10){
    alert("Número invalido")
  }
}

function handleTryClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  validateNumber()

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++;
}

function handleKeyPress(){
  toggleScreen()
}

function handleResetClick(){
  toggleScreen()
  xAttempts
  randomNumber
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyPress(){
  if(e.key == "Enter" && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function handleKeyPress (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
    xAttempts
    randomNumber
  }
}
