//leiao valor da lado de um quadrado, calcule e escreva sua área  ( area = lado ^2)

const prompt = require('prompt-sync')()

//inicio
console.log(' digite o valor do lado de um quadrado e veja a sua área')
const lado = Number (prompt(' digite o valor do lado: '))

// processo
const area = (lado * lado) 

// saida
console.log(' a área desse quadrado é:', area)