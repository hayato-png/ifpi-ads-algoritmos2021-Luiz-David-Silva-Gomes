const prompt = require('prompt-sync')()

//inicio 
console.log(' Conversor de km/h para m/s')
const velocidadeKM = Number (prompt(' Digite a velocidade em (km/h): '))

//processo 
const velocidadeMS = velocidadeKM / 3.6

//saída 
console.log(` A velocidade ${velocidadeKM} km/h é igual a: ${velocidadeMS.toFixed(1)} m/s`)