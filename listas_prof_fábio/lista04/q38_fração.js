/* leia duas frações ( numerador e denominador), escreva a soma destas fraçoes, 
escrevendo o resultado em forma de fração */

const prompt=require('prompt-sync')()

// inicio
console.log(' digite duas frações e veja a soma entre elas ')
const num1 = Number (prompt( ' digite o numerador da 1°: '))
const den1 = Number (prompt( ' digite denominador da 1°: '))
const num2 = Number (prompt( ' digite numerador da 2°: '))
const den2 = Number (prompt( ' digite denominador da 2°: '))

//processo 
const den3 = (den1 * den2)
const num3 = (den3 / den1) * num1
const num4 = (den3 / den2) * num2
const num5 = num3 * num4

//saída 
console.log(` a soma é: ${num4} / ${den3} `)