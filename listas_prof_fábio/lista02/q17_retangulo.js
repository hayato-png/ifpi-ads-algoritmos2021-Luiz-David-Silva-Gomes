//leia o valor da base e altura de um retangulo, calcule e escreva sua área (area =(base * altura))

const input = require('prompt-sync')()

// inicio
console.log(' digite o valor da base e da altura de um retângulo e veja o valor da área')
const base = Number (input(' digite o valor da base aqui: '))
const altura = Number (input(' digite o valor da altura aqui: '))

// processo
const area = (base * altura)

// saída 
console.log(' o valor da área desse retângulo é:', area )