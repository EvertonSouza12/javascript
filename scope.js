// determina a visibilidade de alguma variavel

// bloco cria um novo escopo

// var é global e tambem local
// hoisting
console.log(`> existe x antes do bloco?`, x)

{
  var x = 0
}

console.log(`> exsite x depois do bloco?`, x)

// const e let são locais, so funnciona no escopo em que foi criada

console.log(`> existe y antes do bloco?, y`)

{
  let y = 0
}

console.log(`> existe y depois do bloco?`, y)