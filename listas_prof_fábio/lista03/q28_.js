// leia um numero inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde

const prompt=require('prompt-sync')()

// inicio
console.log(' escreva um numero inteiro de horas e veja o equivalente em semanas, dias e horas')
const t = Number(prompt(' digite o valor em horas: '))

// processo
const s = Math.trunc(t / (7 * 24)) 
const dias = Math.trunc(t / 24) % 7
const hr = t % 24

// saida
console.log(` equivalem a: ${s} semana(s), ${dias} dia(s) e ${hr} hora(s) `)

