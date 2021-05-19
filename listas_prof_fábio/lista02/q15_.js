// leia o valor da base e altura de um triangulo, calcule e escreva sua área (area =(base * altura)/2)

const input = require('prompt-sync')()

// inicio 
console.log(' digite o valor da base e da altura de um triângulo e veja o valor da área')
const base = Number(input(' digite o valor da altura aqui: '))
const altura = Number(input(' digite o valor da base aqui: '))

//processo
const area = ( base * altura) /2

// saída 
console.log(` a área desse triângulo é: ${area}`)


