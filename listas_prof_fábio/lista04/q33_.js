// leia um numerp inteiro (3 digitos), calcule e escreva a soma desse numero pelo seu inverso

const prompt=require('prompt-sync')()

//inicio
console.log(' digite um número de 3 digitos e veja a soma desse número pelo seu inverso')
const n1 = (prompt(' digite o número: '))

// processo
const inverso = n1.split('').reverse().join('')
const soma = Number (n1 + inverso) 

// saída 
console.log(` a soma entre ${n1} + ${inverso} é: ${soma}`)