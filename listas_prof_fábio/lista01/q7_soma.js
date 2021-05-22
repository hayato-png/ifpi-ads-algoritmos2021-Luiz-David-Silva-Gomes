//leia 3 numeros, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos

const input = require('prompt-sync')()

// inicio 
console.log(' soma dos dois primeiros números e a diferença entre os 2 últimos ')
const n1 = Number (input(' digite um número: '))
const n2 = Number (input(' digite outro número: '))
const n3 = Number (input(' digite mais um número: '))
const soma = n1 + n2
const diferença = n2 - n3

// saída 
console.log(` a soma entre ${n1} + ${n2} é: ${soma} `)
console.log(`a diferença entre ${n2} - ${n3} é: ${diferença}`)