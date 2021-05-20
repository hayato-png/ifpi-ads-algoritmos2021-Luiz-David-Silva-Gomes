const input = require('prompt-sync')()

// inicio 
console.log(' conversor de kilogramas para gramas ')
const kg = Number (input(' digite o peso em (kg): '))

//processo
const g = kg * 1000

// saída 
console.log(` o peso ${kg}kg é igual a : ${g} g`)