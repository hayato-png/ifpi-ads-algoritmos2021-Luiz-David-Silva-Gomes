// leia um numero inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde

const prompt=require('prompt-sync')()

// inicio
console.log(' digite um número (inteiro) em minutos e veja o resultado em dias, horas e minutos ')
const tempo = Number (prompt(' digite o valor: '))

// processo
const dias = Math.trunc (tempo / ( 24 * 60 ))
const horas = Math.trunc( tempo / 60)%24
const minutos = tempo % 60

// saída 
console.log(` o resultado é: ${dias} dia(s), ${horas} hora(s) e ${minutos} minuto(s) `)