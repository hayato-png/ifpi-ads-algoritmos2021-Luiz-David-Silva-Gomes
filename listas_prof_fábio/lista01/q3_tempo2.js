//leia um valor em minutos, calcule e escreva o equivalente em horas e minutos

let input = require('prompt-sync')()

//inicio 
console.log(' digite um valor em minutos e veja o equivalente em horas e minutos')
let minuto = Number(input( 'Digite os minutos: '))

//processo  
let horas = Math.trunc (minuto / 60)
let horas_minutos  = minuto % 60

//saída
console.log(` o valor em horas é: ${horas} hora(s) e ${horas_minutos} minuto(s) `)