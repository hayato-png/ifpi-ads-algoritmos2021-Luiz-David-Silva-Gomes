// leia o valor do raio de uma esfera, calcule e escreva seu volume (v = (4 * pi * r ^3) /3 ) (pi = 3,14)

const input = require('prompt-sync')()

// inicio
console.log(' digite o valor do raio de uma esfera e veja o volume dela')
const r = Number(input( ' digite o valor do raio: '))

// processo
const pi = 3.14
const r3 = Math.pow (r , 3 )
const v =  4 * pi * r3 / 3

// saída 
console.log(' o volume dessa esfera é:', v.toFixed(2))
