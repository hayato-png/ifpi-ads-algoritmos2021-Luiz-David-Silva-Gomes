const prompt = require('prompt-sync')()

//inicio 
console.log(' conversor de gramas para kilogramas')
const g = Number (prompt(' Digite o valor em gramas:'))

//processo
const kg = g / 1000

// saída 
console.log(` o peso ${g} g é igual a: ${kg} kg`)