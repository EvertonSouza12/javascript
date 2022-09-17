// calback function
// função passando de paramentro para outra funcção

function sayMyName(name){
  name()
}

sayMyName(
  () => {
    console.log(`estou em uma callback`)
  }
)