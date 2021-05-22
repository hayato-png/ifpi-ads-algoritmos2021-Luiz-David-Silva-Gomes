// leia 3 números, calcule e escreva a média dos números 

const prompt = require('prompt-sync')()

// inicio
console.log(' digite 3 números e veja a média ')
const n1 = Number(prompt(' digite o 1° número: '))
const n2 = Number(prompt(' digite o 2° número: '))
const n3 = Number(prompt(' digite o 3° número: '))

// processo 
const m = Math.trunc (n1 + n2 + n3 ) / 3

// saída 
console.log(` a média é: ${m}`)