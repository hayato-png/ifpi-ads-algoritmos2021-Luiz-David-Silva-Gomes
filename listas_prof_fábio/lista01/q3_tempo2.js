//leia um valor em minutos, calcule e escreva o equivalente em horas e minutos

let input = require('prompt-sync')()

//inicio 
let minuto = Number(input( ' Digite os minutos: '))

//processo  
let horas = minuto / 60
let horas_minutos  = minuto % 60

//saída
console.log(` o valor em horas é ${horas} hrs e ${horas_minutos} min `)