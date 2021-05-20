//leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos

const input = require ('prompt-sync')()

//inicio 
console.log(' conversor de horas, minutos para minutos. ')
const horas = Number(input(' digite as horas: ' ))
const minutos = Number(input(' digite o(s) minuto(s): ' ))

//processo
const horas_minutos = horas * 60 + minutos 

//saída
console.log(`${horas} hora(s) e ${minutos} minuto(s) equivalem a: ${horas_minutos} minutos` ) 
