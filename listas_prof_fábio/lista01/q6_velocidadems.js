const prompt = require('prompt-sync')()

//inicio 
const velocidadeKM = (prompt('Digite a velocidade em (km/h): '))

//processo 
const velocidadeMS = velocidadeKM / 3.6

//saída 
console.log(`A velocidade ${velocidadeKM} km/h é igual a: ${velocidadeMS.toFixed(1)} m/s`)