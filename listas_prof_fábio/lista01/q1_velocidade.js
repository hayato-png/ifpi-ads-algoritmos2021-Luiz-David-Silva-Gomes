/* leia uma velocidade em m/s, calcule 
e escreva esta velocidade em km/h. (vkm/h = vm/s *3,6) */

const prompt = require('prompt-sync')()

//inicio
const velocidadeMS = Number (prompt('Velocidade (m/s): '))

// processo
const velocidadeKM = velocidadeMS * 3.6

//saída 
console.log(` A velocidade ${velocidadeMS} m/s é igual a ${velocidadeKM.toFixed(0)} km/h `)