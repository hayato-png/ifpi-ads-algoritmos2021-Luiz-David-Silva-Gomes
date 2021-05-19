//leia um numero inteiro de 3 digitos , calcule e escreva a soma de seus elementos (c + d + u) 
const prompt = require ('prompt-sync')()

// inicio 
console.log(' a soma dos elementos de um número de 3 digitos (c) + (d) + (u)')
const digito = (prompt('Digite um número inteiro de 3 digitos: '))

// processo
const centena = digito / 100
const dezena = (digito % 100)
const unidade = ((digito%100)%10)
const total = centena + dezena + unidade 

// saída 
console.log(` a soma dos elementos desse número é ${centena} + ${dezena} + ${unidade} `)

console.log(` que é igual a: ${total}`)

