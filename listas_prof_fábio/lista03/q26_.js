// leia um numero de dias, calcule e escreva quantas semanas e quantos dias ele corresponde

const input=require('prompt-sync')()

// inicio
console.log(' digite um número inteiro de dias e veja quantas semanas e quantos dias ele corresponde')
const dias = Number(input(' digite o número de dias: '))

// processo
const semana = dias / 7
const diasS = dias % 7 

// saída 
console.log(` corresponde a: ${semana} semana(s) e  ${diasS} dia(s) `)
