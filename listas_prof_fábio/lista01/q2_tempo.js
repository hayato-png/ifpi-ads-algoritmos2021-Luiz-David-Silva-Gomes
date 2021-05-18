//leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos

const input = require ('prompt-sync')()

//inicio 
const horas = Number(input('Digite alguma hora :' ))
const minutos = Number(input('Digite os minutos :' ))

//processo
const horas_minutos = horas * 60 + minutos 

//saída
console.log(`${horas} horas e ${minutos} minutos equivalem a: ${horas_minutos} minutos` ) 
