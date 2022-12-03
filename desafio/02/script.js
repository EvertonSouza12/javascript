const students = [
  {
    name: "Pedro",
    testOne: 7,
    testTwo: 3
  },
  {
    name: "Carla",
    testOne: 2,
    testTwo: 4
  },
  {
    name: "João",
    testOne: 9,
    testTwo: 8,
  },
  {
    name: "Luiza",
    testOne: 10,
    testTwo: 10
  },
]


for(let student of students){

  let avarage = (student.testOne + student.testTwo) / 2

  if(avarage >= 6){
    alert(`Parabéns ${student.name} você passou com a média de ${avarage}`)
  } else{
    alert(`Não foi dessa vez ${student.name} não desista e continue estudando`)
  }
}
