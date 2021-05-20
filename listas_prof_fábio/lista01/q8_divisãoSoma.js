// leia 2 numeros, calcule e escreva a divisão da soma pela subtração dos números lidos

const write = require('prompt-sync')()

// inicio 
console.log(' digite 2 números e veja a divisão da soma pela subtração desses números')
const n1 = Number(write(' digite um número: '))
const n2 = Number(write(' digite outro número: ' ))

// processo
const soma = n1 + n2 
const subtração = n1 - n2
const divisãoSoma = soma / subtração 

// saída 
console.log(' a divisão da soma pela subtração desses números é:', divisãoSoma )