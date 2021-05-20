/* leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos 
e quantos segundos ele corresponde */

const prompt = require('prompt-sync')()

// inicio
console.log(' digite um número de segundos e veja o resultado em horas, minutos e segundos')
const t = Number(prompt( ' digite o número de segundos: '))

// processo
const hr =  t / 3600
const min = (t / 60) % 60
const s = t % 60

// saída 
console.log(` corresponde a: ${hr} horas, ${min} minutos e ${s.toFixed} segundos`)