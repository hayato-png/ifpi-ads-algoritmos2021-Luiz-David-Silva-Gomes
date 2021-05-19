// leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada

const prompt = require('prompt-sync')()

// inicio
console.log(' digite 3 notas e 3 pesos e veja a média ponderada ')

const n1 = Number (prompt(' Digite a primeira nota: '))
const n2 = Number (prompt(' Digite a segunda nota: '))
const n3 = Number(prompt(' Digite a terceira nota: '))
const p1 = Number(prompt(' digite o peso da 1° nota: '))
const p2 = Number(prompt(' digite o peso da 2° nota: '))
const p3 = Number(prompt(' digite o peso da 3° nota: '))

// processo 
const Mp = (p1*n1) + (p2*n2) + (p3*n3) 
const mp = p1 + p2 + p3
const total = Mp / mp

// saída 
console.log(` a média pomderada é:', ${total.toFixed(1)} `)
