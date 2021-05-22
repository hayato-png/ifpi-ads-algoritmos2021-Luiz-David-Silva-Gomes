const input = require('prompt-sync')()

//inicio 
console.log(' conversor de metros para centimetros')
const m = Number (input(' digite aqui o valor em metros(m): '))

//processo
const cm = m * 100

// saída 
console.log(` o valor é igual a : ${cm} cm `)
