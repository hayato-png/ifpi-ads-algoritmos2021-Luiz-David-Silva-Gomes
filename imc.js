// imc= peso(kg) / quadrado da altura(m)
const prompt = require('prompt-sync')()

// inicio 
const peso = Number(prompt ('Qual o seu peso(kg): '))
const altura = Number(prompt('Qual a sua altura(m): '))

// processo 
const imc = peso / (altura * altura)

//final
console.log ('Seu IMC é', imc)