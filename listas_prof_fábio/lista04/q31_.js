// leia um número inteiro de 4 digitos binarios, calcule e escreva o equivalente em base decimal 

const input = require('prompt-sync')()

// inicio
console.log(' digite o número de 4 digitos em binário. ')
const n1 = Number(input(' digite o 1° número: '))
const n2 = Number(input(' digite o 2° número: '))
const n3 = Number(input(' digite o 3° número: '))
const n4 = Number(input(' digite o 4° número: '))

// processo
const decimal = (n1 * Math.pow(2, 3) + n2 * Math.pow(2,2)+
 n3 * Math.pow(2,1) + n4 * Math.pow(2,0)

)
// saída 
console.log(' o número em base decimal é:',decimal)