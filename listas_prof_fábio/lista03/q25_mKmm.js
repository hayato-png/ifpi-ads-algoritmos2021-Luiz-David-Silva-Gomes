// leia um número inteiro de metros, calcule e escreva quantos km e quantos metros ele corresponde 

const prompt=require('prompt-sync')()

// inicio 
console.log(' digite o valor em metros e veja em kilometros(km) e metros(m)')
const m = Number (prompt( ' digite o valor em metros: '))

// processo
const km = m / 1000
const km_m = m % 1000
// saída 
console.log(` o valor equivale a: ${km} km e ${km_m} m `)