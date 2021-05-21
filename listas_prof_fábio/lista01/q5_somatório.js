//leia um numero inteiro de 3 digitos , calcule e escreva a soma de seus elementos (c + d + u) 
const prompt = require ('prompt-sync')()

// inicio 
console.log(' a soma dos elementos de um número de 3 digitos (c) + (d) + (u)')
const digito = Number (prompt(' digite um número inteiro de 3 digitos: '))

// processo
const cent = (digito / 100)
const resto1 = digito % 100 
const dez =   resto1 / 10
const uni =  resto1 % 10

const t =  Math.trunc (cent + dez + uni)

// saída 
console.log(` os elementos são ${cent} + ${dez} + ${uni}`)
console.log(` a soma dos elementos desse número é: ${t}`)

