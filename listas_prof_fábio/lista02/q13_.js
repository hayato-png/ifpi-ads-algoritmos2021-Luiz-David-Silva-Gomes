// leia um valor em real(R$), calcule e escreva 70% deste valor

const input = require('prompt-sync')()

//inicio
console.log(' Digite um valor em real(R$) e veja 70% desse valor')
const valor_real = (input(' digite aqui o valor:  '))

// processo
const porcento = valor_real * 0.7

// saída 
console.log(` 70% desse valor é: ${porcento}  `)