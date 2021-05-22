// leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do primeiro pelo segundo

const prompt = require('prompt-sync')()

// inicio 
console.log(' Digite 2 números inteiros e veja o quociente e o resto da divisão do 1° pelo 2°')
const n1 = Number (prompt(' Digite um número aqui:  '))
const n2 = Number (prompt(' Digite outro número aqui: '))

// processo
const quociente = n1 / n2
const resto = n1 % n2

// saída 
console.log(' O quociente é:', quociente)
console.log(' E o resto é: ', resto )