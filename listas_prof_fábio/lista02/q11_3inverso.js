// leia um numero inteiro de 3 digitos e escreva o inverso do número. ex( 535 == 235)
const input = require('prompt-sync')()

// inicio 
console.log(' digite um número inteiro  de 3 digitos e veja o inverso dele. ')
const n = (input(' digite um número aqui: '))

// processo
const resultado = n.split('').reverse().join('')

// saída 
console.log(` o inverso do número é: ${resultado}` )